async function createFiles(dayNumber: number) {
  await Deno.create(`inputs/day${dayNumber}.txt`);
  await Deno.create(`solutions/day${dayNumber}.ts`);
}

async function writeTemplateFile(dayNumber: number, template: string) {
  await Deno.writeTextFile(`solutions/day${dayNumber}.ts`, template);
}

const dayNumber = Number(Deno.args[0]);

const template = `
import { readInput } from "../util/readInput.ts";

async function parseInput(fileName: string): Promise<string[]>{
    const input = await readInput(fileName, "\\r\\n");
    return input;
}

function part1(){}

function part2(){}
`;
await createFiles(dayNumber);
await writeTemplateFile(dayNumber, template);
