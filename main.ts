import { IslandFinder } from './island-finder.ts';

const map = [
  ['1', '1', '1', '1'],
  ['1', '0', '1', '1'],
  ['1', '1', '1', '1'],
  ['1', '0', '1', '1'],
  ['1', '0', '0', '1'],
];

const numberOfIslands = new IslandFinder().findNumberOfIslands(map);

console.log(numberOfIslands);
