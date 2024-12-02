import readInput from "../util/readInput.ts";

async function readAndSortInput(fileName: string){
  const arr1: number[] = [];
  const arr2: number[] = [];

  const lines = await readInput(fileName);

  for (let i = 0; i < lines.length; i++){
    const nums = lines[i].split("   ");
    arr1.push(Number(nums[0]));
    arr2.push(Number(nums[1]));
  }
  
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
}

async function p1(){
  
  const [arr1, arr2] = await readAndSortInput("inputs/day1.txt");

  let sum = 0;
  for (let i = 0; i < arr1.length; i++){
    sum += Math.abs(arr1[i] - arr2[i]);
  }
  console.log(sum)
}

async function p2(){

  const [arr1, arr2] = await readAndSortInput("inputs/day1.txt");

  const map = new Map<number, number>();

  let sum = 0;
  for (let i = 0; i < arr2.length; i++){
    
    const val = map.has(arr2[i]);
    const num = map.get(arr2[i]);

    if (val && num != undefined){
      map.set(arr2[i], num+1)
    }else {
      map.set(arr2[i], 1);
    }
  }

  for (let i = 0; i < arr1.length; i++){
    const val = map.has(arr1[i]);
    const num = map.get(arr1[i]);
    if (val && num != undefined){
      sum += arr1[i] * num;
    }
  }
  console.log(sum)
}

p1();
p2();
