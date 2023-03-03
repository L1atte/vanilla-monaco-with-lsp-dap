import { StreamMessageReader, StreamMessageWriter } from "vscode-jsonrpc/node.js";
import { start } from "./json-server.js";
const reader = new StreamMessageReader(process.stdin);
const writer = new StreamMessageWriter(process.stdout);
start(reader, writer);
