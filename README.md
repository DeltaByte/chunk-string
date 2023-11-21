# chunk-string

Split a string into smaller strings, splits on whitespace where possible.

```typescript
import { chunkString } from "chunk-string";

const example = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
const maxWordLength = 15;

const chunks = chunkString(example, maxWordLength);
const expectedOutput = [
  'Lorem ipsum',
  'dolor sit amet,',
  'consectetur',
  'adipiscing elit'
];

console.log(chunks, expectedOutput);
```

## Prefix

There is support for automatically adding a prefix to each chunk using a function. There are
several included examples;

- `count`
- `markdownCount`

```typescript
import { chunkString, markdownCountPrefix } from "chunk-string";

const example = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const maxWordLength = 50;

const chunks = chunkString(example, maxWordLength, markdownCountPrefix);
const expectedOutput = [
  '**_(1/4)_** Lorem ipsum dolor sit amet,',
  '**_(2/4)_** consectetur adipiscing elit, sed do',
  '**_(3/4)_** eiusmod tempor incididunt ut labore',
  '**_(4/4)_** et dolore magna aliqua.'
];

console.log(chunks, expectedOutput);
```
