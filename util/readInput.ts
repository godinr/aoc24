export default async function readInput(fileName: string): Promise<string[]> {
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile(fileName);
    return decoder.decode(data).split("\r\n");
  }