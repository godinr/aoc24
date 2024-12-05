import { readInput } from "../util/readInput.ts";

async function parseInput(fileName: string): Promise<string[][]> {
  const table: string[][] = [];
  const lines = await readInput(fileName, "\r\n");

  for (const line of lines) {
    table.push(line.split(""));
  }
  return table;
}

type Vect2d = {
  x: number;
  y: number;
};

function findWord(
  table: string[][],
  word: string,
  position: Vect2d,
  direction: Vect2d,
): boolean {
  let count = 1;
  let x = position.x;
  let y = position.y;

  while (count < word.length) {
    x += direction.x;
    y += direction.y;

    if (x < 0 || y < 0 || x >= table[0].length || y >= table.length) {
      return false;
    }

    if (table[x][y] != word.charAt(count)) {
      return false;
    }
    count++;
  }
  return true;
}

function part1(table: string[][]) {
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === "X") {
        // left
        if (findWord(table, "XMAS", { x: i, y: j }, { x: -1, y: 0 })) {
          count++;
        }

        // right
        if (findWord(table, "XMAS", { x: i, y: j }, { x: 1, y: 0 })) {
          count++;
        }

        // up
        if (findWord(table, "XMAS", { x: i, y: j }, { x: 0, y: -1 })) {
          count++;
        }

        // down
        if (findWord(table, "XMAS", { x: i, y: j }, { x: 0, y: 1 })) {
          count++;
        }

        // top left
        if (findWord(table, "XMAS", { x: i, y: j }, { x: -1, y: -1 })) {
          count++;
        }

        // bottom right
        if (findWord(table, "XMAS", { x: i, y: j }, { x: 1, y: 1 })) {
          count++;
        }

        // bottom left
        if (findWord(table, "XMAS", { x: i, y: j }, { x: -1, y: 1 })) {
          count++;
        }

        // top right
        if (findWord(table, "XMAS", { x: i, y: j }, { x: 1, y: -1 })) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

function part2(table: string[][]) {
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === "A") {
        if (
          findWord(table, "XM", { x: i, y: j }, { x: -1, y: -1 }) &&
          findWord(table, "AS", { x: i, y: j }, { x: 1, y: 1 }) &&
          findWord(table, "XM", { x: i, y: j }, { x: -1, y: 1 }) &&
          findWord(table, "AS", { x: i, y: j }, { x: 1, y: -1 })
        ) {
          count++;
        } else if (
          findWord(table, "AS", { x: i, y: j }, { x: -1, y: -1 }) &&
          findWord(table, "XM", { x: i, y: j }, { x: 1, y: 1 }) &&
          findWord(table, "AS", { x: i, y: j }, { x: -1, y: 1 }) &&
          findWord(table, "XM", { x: i, y: j }, { x: 1, y: -1 })
        ) {
          count++;
        } else if (
          findWord(table, "AS", { x: i, y: j }, { x: -1, y: -1 }) &&
          findWord(table, "XM", { x: i, y: j }, { x: 1, y: 1 }) &&
          findWord(table, "XM", { x: i, y: j }, { x: -1, y: 1 }) &&
          findWord(table, "AS", { x: i, y: j }, { x: 1, y: -1 })
        ) {
          count++;
        } else if (
          findWord(table, "XM", { x: i, y: j }, { x: -1, y: -1 }) &&
          findWord(table, "AS", { x: i, y: j }, { x: 1, y: 1 }) &&
          findWord(table, "AS", { x: i, y: j }, { x: -1, y: 1 }) &&
          findWord(table, "XM", { x: i, y: j }, { x: 1, y: -1 })
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

const table = await parseInput("inputs/day4.txt");
part1(table);
part2(table);
