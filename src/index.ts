export type PrefixerFunction = (chunks: string[]) => string[]
export type PrefixConfig = {
  length: number;
  prefixer: PrefixerFunction;
}

export * from "./chunkString"
export * from "./countPrefixer"
