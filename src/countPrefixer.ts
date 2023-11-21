import { PrefixConfig } from ".";

/**
 * Add (01/99)
 */
export const countPrefix: PrefixConfig = {
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
export const markdownCountPrefix: PrefixConfig = {
  length: "**_(000/000)_**".length,
  prefixer: (chunks) => {
    return chunks.map((chunk, i) => {
      const totalLen = chunks.length.toString().length;
      const current = (++i).toString().padStart(totalLen, "0");
      return `**_(${current}/${chunks.length})_** ${chunk}`;
    });
  },
};
