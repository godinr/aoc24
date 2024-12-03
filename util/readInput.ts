export async function readInput(fileName: string, sep: string): Promise<string[]> {
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile(fileName);
    return decoder.decode(data).split(sep);
  }

  export async function readInputNoSplit(fileName: string): Promise<string> {
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile(fileName);
    return decoder.decode(data);
  }