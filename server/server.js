import { WebSocketServer } from "ws";
import { URL } from "url";
import express from "express";
import { launch } from "./json-server-launcher.js";
import { getLocalDirectory } from "./fs-utils.js";
process.on("uncaughtException", function (err) {
	console.error("Uncaught Exception: ", err.toString());
	if (err.stack) {
		console.error(err.stack);
	}
});
// create the express application
const app = express();
// server the static content, i.e. index.html
app.use(express.static(getLocalDirectory()));
// start the server
const server = app.listen(3000);
// create the web socket
const wss = new WebSocketServer({
	noServer: true,
	perMessageDeflate: false,
});
server.on("upgrade", (request, socket, head) => {
	const baseURL = `http://${request.headers.host}/`;
	const pathname = request.url ? new URL(request.url, baseURL).pathname : undefined;
	if (pathname === "/sampleServer") {
		wss.handleUpgrade(request, socket, head, webSocket => {
			const socket = {
				send: content =>
					webSocket.send(content, error => {
						console.log(content);
						if (error) {
							throw error;
						}
					}),
				onMessage: cb => webSocket.on("message", cb),
				onError: cb => webSocket.on("error", cb),
				onClose: cb => webSocket.on("close", cb),
				dispose: () => webSocket.close(),
			};
			// launch the server when the web socket is opened
			if (webSocket.readyState === webSocket.OPEN) {
				launch(socket);
			} else {
				webSocket.on("open", () => launch(socket));
			}
		});
	}
});
