import { PrefixConfig } from ".";

export const chunkString = (message: string, maxLength: number = 1024, prefix?: PrefixConfig): string[] => {
  let chunks: string[] = [];
  let currentChunk: string[] = [];
  const prefixLen = prefix?.length || 0;
  const maxWordLen = maxLength - prefixLen;

  // bypass splitting for short messages
  if (message.length <= maxLength) {
    return [message];
  }

  // split on whitespace or max len
  const words: string[] = [];
  for (const word of message.split(/\s/)) {
    if (word.length > maxWordLen) {
      word.match(new RegExp(".{1," + word.length + "}", "g"))?.forEach((w) => words.push(w))
    } else {
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
  return prefix?.prefixer ? prefix.prefixer(chunks) : chunks
}
