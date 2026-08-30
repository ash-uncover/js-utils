# js-utils

[![npm version](https://badge.fury.io/js/@sol.ac%2Fjs-utils.svg)](https://badge.fury.io/js/@sol.ac%2Fjs-utils)
![Last Push](https://github.com/ash-uncover/js-utils/actions/workflows/PUSH-publish.yml/badge.svg)

A small JavaScript/TypeScript utility library with common helpers reusable across projects.

## Installation

```bash
npm install @sol.ac/js-utils
```

## Features

| Export | Description |
|---|---|
| `Alphabet` | Constants for the 26 lowercase letters |
| `ArrayUtils` | Create integer arrays, shuffle, pick random elements or subsets, remove elements |
| `DataState` / `DataStates` / `DataStatesUtils` | Typed states for async data fetching (`NEVER`, `FETCHING_FIRST`, `FETCHING`, `SUCCESS`, `FAILURE`, `OUTDATED`) and a utility to merge multiple states into one |
| `DateUtils` | Time constants (ms/sec/min/hour/day), duration-to-human-time conversion, and date string formatting |
| `DownloadUtils` | Trigger a browser download of a JSON file |
| `EncodeUtils` | Base64 encode/decode and HTTP Basic auth header helpers |
| `FileUtils` | Get file extension, validate extension and size of a browser `File` object |
| `FunctionUtils` | Extract parameter names from a function |
| `HttpHeaders` / `HttpMethods` / `HttpStatuses` | Typed constants for common HTTP headers, methods, and status codes |
| `ObjectUtils` | Null/undefined check, deep clone, dot-path property access, wrap value in array |
| `PromiseUtils` | Ensure a promise takes at least a minimum duration (avoids UI flicker on fast responses) |
| `Sets` | Set operations on plain arrays: deduplicate, add, remove, merge |
| `StringLabel` | Convert a string to camelCase, PascalCase, worm_case, Snake_Case, or SERPENT_CASE |
| `StringUtils` | Capitalize, replace all occurrences, generate indentation strings |
| `UUID` | Generate random v4 UUIDs |

## License

MIT
