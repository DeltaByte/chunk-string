"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkString = void 0;
const chunkString = (message, maxLength = 1024, prefix) => {
    var _a;
    let chunks = [];
    let currentChunk = [];
    const prefixLen = (prefix === null || prefix === void 0 ? void 0 : prefix.length) || 0;
    const maxWordLen = maxLength - prefixLen;
    // bypass splitting for short messages
    if (message.length <= maxLength) {
        return [message];
    }
    // split on whitespace or max len
    const words = [];
    for (const word of message.split(/\s/)) {
        if (word.length > maxWordLen) {
            (_a = word.match(new RegExp(".{1," + word.length + "}", "g"))) === null || _a === void 0 ? void 0 : _a.forEach((w) => words.push(w));
        }
        else {
            words.push(word);
        }
    }
    // combine words into messages
    for (const word of words) {
        // start new chunk if over max len
        if (currentChunk.join(" ").length + word.length + prefixLen + 1 > maxLength) {
            chunks.push(currentChunk.join(" "));
            currentChunk = [];
        }
        // add word to chunk
        currentChunk.push(word);
    }
    // add final chunk and apply prefix
    chunks.push(currentChunk.join(" "));
    chunks = chunks.filter((chunk) => chunk.length > 0);
    // apply prefix
    return (prefix === null || prefix === void 0 ? void 0 : prefix.prefixer) ? prefix.prefixer(chunks) : chunks;
};
exports.chunkString = chunkString;
