import { resolve } from "path";
import { WebSocketMessageReader, WebSocketMessageWriter } from "vscode-ws-jsonrpc";
import { createConnection, createServerProcess, forward } from "vscode-ws-jsonrpc/server";
import { start } from "./json-server.js";
import { Message, InitializeRequest } from "vscode-languageserver";
import { getLocalDirectory } from "./fs-utils.js";
export function launch(socket) {
	const reader = new WebSocketMessageReader(socket);
	const writer = new WebSocketMessageWriter(socket);
	const asExternalProccess = process.argv.findIndex(value => value === "--external") !== -1;
	if (asExternalProccess) {
		// start the language server as an external process
		const extJsonServerPath = resolve(getLocalDirectory(), "../dist/ext-json-server.js");
		const socketConnection = createConnection(reader, writer, () => socket.dispose());
		const serverConnection = createServerProcess("JSON", "node", [extJsonServerPath]);
		if (serverConnection) {
			forward(socketConnection, serverConnection, message => {
				if (Message.isRequest(message)) {
					if (message.method === InitializeRequest.type.method) {
						const initializeParams = message.params;
						initializeParams.processId = process.pid;
					}
				}
				return message;
			});
		}
	} else {
		// start the language server inside the current process
		start(reader, writer);
	}
}
