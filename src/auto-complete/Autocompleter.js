import { default as antlr4 } from "antlr4";
import AtomTransition from "antlr4/src/antlr4/transition/AtomTransition.js";

const caret = new antlr4.CommonToken();

function process(tokens, stack) {
	const suggestions = [];

	while (stack.length !== 0) {
		const [tokenStreamIndex, state, alreadyPassed] = stack.pop();

		// Iterates through the transitions in reverse order so that the first transition is processed
		// first (therefore it's pushed the last) This way if the grammar says '(A|B|C)', the autocompleter
		// will suggest them in that same order
		for (let i = state.transitions.length - 1; i >= 0; i--) {
			const it = state.transitions[i];
			if (it.isEpsilon && !alreadyPassed.includes(it.target.stateNumber)) {
				stack.push([tokenStreamIndex, it.target, [it.target.stateNumber, ...alreadyPassed]]);
			} else if (it instanceof AtomTransition || it instanceof SetTransition) {
				const nextToken = tokens[tokenStreamIndex];
				if (nextToken === caret) {
					suggestions.push(...intervalToArray(it.label));
				} else if (it.label.intervals.some(x => x.contains(nextToken.type))) {
					stack.push([
						tokenStreamIndex + 1, // Increase the index because it has consumed a token
						it.target,
						// 'alreadyPassed' is now empty because it just consumed a token, so there's no longer
						// a risk of getting stuck in an infinite loop.
						[],
					]);
				}
			}
		}
	}
	return suggestions;
}

function intervalToArray(interval) {
	let values = [];
	let n = interval.intervals.length;
	for (let i = 0; i < n; i++) {
		let I = interval.intervals[i];
		let a = I.start;
		let b = I.stop;
		// Careful. Intervals are open in the right, thats why < and not <=
		for (let v = a; v < b; v++) {
			values.push(v);
		}
	}

	return values;
}

class AutoCompleter {
	constructor(Lexer, Parser, options) {
		this._lexer = Lexer;
		this._parser = Parser;
		this.options = options;
	}

	/**
	 *
	 * @param {*} input 已经写好的文本
	 */
	autoComplete(input) {
		// Creates a CharStream given a String.
		const chars = new antlr4.CharStreams.fromString(input);
		const lexer = new this._lexer(chars);
		lexer.removeErrorListeners();
		lexer.addErrorListener(new ThrowErrorListener());
		const all = lexer.getAllTokens();
		const tokenList = all.filter(x => x.channel === 0);
		tokenList.push(caret);

		const parser = new this._parser(lexer);
		const startingRule = this.options?.initialRule ?? 0;
		const initialState = parser.atn.ruleToStartState[startingRule];

		const suggestions = [];
		process(tokenList, 0, initialState, suggestions);
		return suggestions;
	}
}

class ThrowErrorListener extends antlr4.error.ErrorListener {
	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		throw new Error("line " + line + ":" + column + " " + msg);
	}
}
