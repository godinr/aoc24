import readInput from "../util/readInput.ts";

async function parseInput(fileName: string): Promise<string[]>{
    const input = await readInput(fileName, "\r\n");
    return input;
}

type Order = "inc" | "dec";

function isSafe(values: string[]): boolean {
    const order: Order = Number(values[0]) < Number(values[1]) ? "inc" : "dec";
    const isEven = Number(values[0]) - Number(values[1]) === 0;

    if (isEven) return false;
    
    for (let i = 0; i < values.length - 1; i++){
        const diff = Number(values[i]) - Number(values[i+1]); 
        if (order === "inc" && (diff > -1 || diff < -3)){
            return false;
        }else if (order === "dec" && (diff < 1 || diff > 3)){
            return false;
        }
    }
    return true;
}


async function part1(fileName: string): Promise<number>{
    const lines = await parseInput(fileName);
    let count = 0;

    for (const line of lines){
        const numbers = line.split(" ");
        if (isSafe(numbers)){
            count++;
        }
    }
    return count;
}

async function part2(fileName: string): Promise<number>{
    const lines = await parseInput(fileName);
    let count = 0;

    for (const line of lines){
        const numbers = line.split(" ");
        if (isSafe(numbers)){
            count++;
        }else {
            for (let i = 0; i < numbers.length; i++){
                const arr = numbers.slice(0,i).concat(numbers.slice(i+1, numbers.length));
                if (isSafe(arr)){
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}

const inputPath = "inputs/day2.txt";
console.log(await part1(inputPath));
console.log(await part2(inputPath));