import { expose } from "comlink";
import { GenerateFn, generateSuggestion } from "./generateSuggestion";

type CodeGenerator = {
	generateSuggestion: GenerateFn;
};

const worker: CodeGenerator = {
	generateSuggestion,
};

expose(worker);

export type { CodeGenerator };
