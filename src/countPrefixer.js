"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownCountPrefix = exports.countPrefix = void 0;
/**
 * Add (01/99)
 */
exports.countPrefix = {
    length: "(000/000)".length,
    prefixer: (chunks) => {
        return chunks.map((chunk, i) => {
            const totalLen = chunks.length.toString().length;
            const current = (++i).toString().padStart(totalLen, "0");
            return `(${current}/${chunks.length}) ${chunk}`;
        });
    },
};
/**
 * Add bold/italic (01/99)
 */
exports.markdownCountPrefix = {
    length: "**_(000/000)_**".length,
    prefixer: (chunks) => {
        return chunks.map((chunk, i) => {
            const totalLen = chunks.length.toString().length;
            const current = (++i).toString().padStart(totalLen, "0");
            return `**_(${current}/${chunks.length})_** ${chunk}`;
        });
    },
};
