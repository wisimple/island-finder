# Island Finder

`IslandFinder` is a TypeScript class built for the Deno runtime that determines the number of islands in a given 2D binary grid. The grid represents a map of `'1's` (land) and `'0's` (water). An island is defined as a group of connected lands that are surrounded by water and formed by connecting adjacent lands either horizontally or vertically. You can assume that all four edges of the grid are surrounded by water.

The goal is to return the total number of islands in the map.

### Example

```typescript
const map = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
```

Expected result is 2

## Table of Contents

- [Installation](#installation)
- [Running](#running)
- [Testing](#testing)

## Installation

This project uses [Deno](https://deno.land/), a modern runtime for JavaScript and TypeScript.

### Installing Deno

If you don't have Deno installed, you can install it by following these steps:

1. Install Deno using the following command:

```bash
brew install deno
```

2. Verify the installation

```bash
deno --version
```

## Running

1. Clone the repo
2. Go into repo directory
3. Run
   ```bash
   deno run main.ts
   ```

## Testing

Run

```bash
deno test
```
