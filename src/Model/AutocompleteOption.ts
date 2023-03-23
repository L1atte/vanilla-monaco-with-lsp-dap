import { AutocompleteOptionType } from "./AutocompleteOptionType";

export class AutocompleteOption {
	value: string | null;
	optionType: AutocompleteOptionType;

	constructor(value: string | null, optionType: AutocompleteOptionType) {
		this.value = value;
		this.optionType = optionType;
	}
}
