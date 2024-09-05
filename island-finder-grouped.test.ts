import { assertEquals } from '@std/assert';
import { IslandFinderGrouped } from './island-finder-grouped.ts';

const islandFinder = new IslandFinderGrouped();

Deno.test('it should return correct value for given example', () => {
  const result = islandFinder.findNumberOfIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]);
  assertEquals(result, 1);
});

Deno.test('it should return correct value for given example', () => {
  const result = islandFinder.findNumberOfIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]);
  assertEquals(result, 3);
});

Deno.test('it should return correct value for given example', () => {
  const result = islandFinder.findNumberOfIslands([
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  ]);

  assertEquals(result, 2);
});

Deno.test('it should return 0 for a map full of water', () => {
  const result = islandFinder.findNumberOfIslands([
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
  ]);
  assertEquals(result, 0);
});

Deno.test('it should return 1 for the given map', () => {
  const result = islandFinder.findNumberOfIslands([['1']]);
  assertEquals(result, 1);
});

Deno.test('it should return 0 for an empty array', () => {
  const result = islandFinder.findNumberOfIslands([]);
  assertEquals(result, 0);
});
