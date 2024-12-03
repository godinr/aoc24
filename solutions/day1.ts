import { readInput } from "../util/readInput.ts";

async function readAndSortInput(fileName: string) {
  const arr1: number[] = [];
  const arr2: number[] = [];

  const lines = await readInput(fileName, "\r\n");

  for (let i = 0; i < lines.length; i++) {
    const [n1, n2] = lines[i].split("   ");
    arr1.push(Number(n1));
    arr2.push(Number(n2));
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
}

function part1(arr1: number[], arr2: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum += Math.abs(arr1[i] - arr2[i]);
  }
  return sum;
}

function part2(arr1: number[], arr2: number[]): number {
  const map = new Map<number, number>();
  let sum = 0;

  for (let i = 0; i < arr2.length; i++) {
    const num = map.get(arr2[i]);

    if (num != undefined) {
      map.set(arr2[i], num + 1);
      continue;
    }
    map.set(arr2[i], 1);
  }

  for (let i = 0; i < arr1.length; i++) {
    const num = map.get(arr1[i]);
    if (num != undefined) {
      sum += arr1[i] * num;
    }
  }
  return sum;
}

const [a1, a2] = await readAndSortInput("inputs/day1.txt");
console.log(part1(a1, a2));
console.log(part2(a1, a2));
