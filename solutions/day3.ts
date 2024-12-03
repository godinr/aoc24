
import { readInputNoSplit}  from "../util/readInput.ts";

async function parseInput(fileName: string): Promise<string>{
    const input = await readInputNoSplit(fileName);
    return input;
}

function part1(inputString: string): number{
    const matches = inputString.matchAll(/mul\((\d+),(\d+)\)/g);

    let sum = 0;
    for (const match of matches){
        sum += Number(match[1]) * Number(match[2])
    }
    return sum
}

function part2(inputString: string): number{
    const matches = inputString.matchAll(/(mul\((\d+),(\d+)\))|(do|don't)\(\)/g);
    
    let flag = true;
    let sum = 0;

    for (const match of matches){
        if (match[0].trim() === "do()"){
            flag = true;
        }else if (match[0].trim() === "don't()"){
            flag = false;
        }else if (flag){
            sum += Number(match[2]) * Number(match[3])
        }
    }
    return sum;
}

const rawInput = await parseInput("inputs/day3.txt");

console.log(part1(rawInput))
console.log(part2(rawInput))