export class IslandFinder {
  private static readonly LAND = '1';
  private static readonly SEA = '0';

  private isHorizontallySurrounded(map: string[][], row: number, col: number) {
    const left = map[row][col - 1];
    const right = map[row][col + 1];

    const isLeftSea = left === undefined || left === IslandFinder.SEA;
    const isRightSea = right === undefined || right === IslandFinder.SEA;

    return isLeftSea && isRightSea;
  }

  private isVerticallySurrounded(map: string[][], row: number, col: number) {
    const above = map[row - 1]?.[col];
    const below = map[row + 1]?.[col];

    const isAboveSea = above === undefined || above === IslandFinder.SEA;
    const isBelowSea = below === undefined || below === IslandFinder.SEA;

    return isAboveSea && isBelowSea;
  }

  private isSurroundedBySea(map: string[][], row: number, col: number) {
    return (
      this.isHorizontallySurrounded(map, row, col) ||
      this.isVerticallySurrounded(map, row, col)
    );
  }

  public findNumberOfIslands(map: string[][]) {
    let count = 0;

    for (let m = 0; m < map.length; m++) {
      for (let n = 0; n < map[m].length; n++) {
        if (map[m][n] === IslandFinder.LAND && this.isSurroundedBySea(map, m, n)) {
          count++;
        }
      }
    }

    return count;
  }
}
