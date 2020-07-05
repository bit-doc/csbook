

import { BufReader, BufWriter } from "https://deno.land/std/io/bufio.ts";
const conn = Deno.connect({ port: 6379 });

let reader = new BufReader(await conn);
let writer = new BufWriter(await conn);
const encoder = new TextEncoder();
const IntegerReplyCode = ":".charCodeAt(0);
const BulkReplyCode = "$".charCodeAt(0);
const SimpleStringCode = "+".charCodeAt(0);
const ArrayReplyCode = "*".charCodeAt(0);
const ErrorReplyCode = "-".charCodeAt(0);


let res = sendCommand(writer, reader, "AUTH", '');
console.log(1, await res)
export async function sendCommand(
    writer: BufWriter,
    reader: BufReader,
    command: string,
    ...args: (number | string)[]
) {
    const msg = createRequest(command, ...args);
    await writer.write(encoder.encode(msg));
    await writer.flush();
    return readReply(reader);
}

export function createRequest(
    command: string,
    ...args: (string | number)[]
): string {
    const _args = args.filter((v) => v !== void 0 && v !== null);
    let msg = "";
    msg += `*${1 + _args.length}\r\n`;
    msg += `$${command.length}\r\n`;
    msg += `${command}\r\n`;
    for (const arg of _args) {
        const val = String(arg);
        const bytesLen = encoder.encode(val).byteLength;
        msg += `$${bytesLen}\r\n`;
        msg += `${val}\r\n`;
    }
    return msg;
}



export async function readReply(reader: BufReader) {
    const res = await reader.peek(1);
    if (res === null) {
        throw new Error("EOF");
    }
    console.log(999, res[0], IntegerReplyCode, SimpleStringCode, BulkReplyCode, ArrayReplyCode, ErrorReplyCode)

    throw new Error("Invalid state");
}