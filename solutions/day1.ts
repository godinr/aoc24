import readInput from "../util/readInput.ts";

async function readAndSortInput(fileName: string){
  const arr1: number[] = [];
  const arr2: number[] = [];

  const lines = await readInput(fileName, "\r\n");

  for (let i = 0; i < lines.length; i++){
    const [n1, n2] = lines[i].split("   ");
    arr1.push(Number(n1));
    arr2.push(Number(n2));
  }
  
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
}

async function part1(): Promise<number>{
  
  const [arr1, arr2] = await readAndSortInput("inputs/day1.txt");
  let sum = 0;
  
  for (let i = 0; i < arr1.length; i++){
    sum += Math.abs(arr1[i] - arr2[i]);
  }
  return sum;
}

async function part2(): Promise<number> {

  const [arr1, arr2] = await readAndSortInput("inputs/day1.txt");
  const map = new Map<number, number>();
  let sum = 0;

  for (let i = 0; i < arr2.length; i++){
    
    const num = map.get(arr2[i]);

    if (num != undefined){
      map.set(arr2[i], num+1)
      continue;
    }
    map.set(arr2[i], 1);
  }

  for (let i = 0; i < arr1.length; i++){
    const num = map.get(arr1[i]);
    if (num != undefined){
      sum += arr1[i] * num;
    }
  }
  return sum;
}

console.log(await part1());
console.log(await part2());
