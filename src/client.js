import { MonacoLanguageClient, CloseAction, ErrorAction, MonacoServices, MessageTransports } from "monaco-languageclient";
import { toSocket, WebSocketMessageReader, WebSocketMessageWriter } from "vscode-ws-jsonrpc";
import normalizeUrl from 'normalize-url';

// create the web socket
const url = createUrl("localhost", 3000, "/sampleServer");
const webSocket = new WebSocket(url);

webSocket.onopen = () => {
	const socket = toSocket(webSocket);
	const reader = new WebSocketMessageReader(socket);
	const writer = new WebSocketMessageWriter(socket);
	const languageClient = createLanguageClient({
		reader,
		writer,
	});
	languageClient.start();
	reader.onClose(() => languageClient.stop());
};

function createLanguageClient(transports) {
	return new MonacoLanguageClient({
		name: "Sample Language Client",
		clientOptions: {
			// use a language id as a document selector
			documentSelector: ["javascript"],
			// disable the default error handler
			errorHandler: {
				error: () => ({ action: ErrorAction.Continue }),
				closed: () => ({ action: CloseAction.DoNotRestart }),
			},
		},
		// create a language client connection from the JSON RPC connection on demand
		connectionProvider: {
			get: () => {
				return Promise.resolve(transports);
			},
		},
	});
}

function createUrl(hostname, port, path) {
	const protocol = location.protocol === "https:" ? "wss" : "ws";
	return normalizeUrl(`${protocol}://${hostname}:${port}${path}`);
}
