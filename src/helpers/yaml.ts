import { parse } from 'yaml';
import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';

export const yaml = <T>(filename: string): Promise<T> => readFile(filename, 'utf-8').then(parse);
export const yamlSync = <T>(filename: string): T => parse(readFileSync(filename, 'utf-8'));
