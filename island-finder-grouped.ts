export class IslandFinderGrouped {
  private static readonly LAND = '1';
  private static readonly MARKED_AS_READ = 'x';

  // checks until it completes an island group
  private checkAdjacent(map: string[][], m: number, n: number) {
    if (m < 0 || n < 0 || m >= map.length || n >= map[m].length || map[m][n] !== IslandFinderGrouped.LAND) {
      return false;
    }

    map[m][n] = IslandFinderGrouped.MARKED_AS_READ;

    this.checkAdjacent(map, m + 1, n);
    this.checkAdjacent(map, m - 1, n);
    this.checkAdjacent(map, m, n + 1);
    this.checkAdjacent(map, m, n - 1);

    return true;
  }

  public findNumberOfIslands(map: string[][]) {
    let count = 0;

    for (let m = 0; m < map.length; m++) {
      for (let n = 0; n < map[m].length; n++) {
        if (this.checkAdjacent(map, m, n)) {
          count++;
        }
      }
    }

    return count;
  }
}
