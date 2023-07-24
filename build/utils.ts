import { resolve } from 'path';

/**
 * 获取某个目录的绝对路径
 */
export const pathResolve = (dir: string) => resolve(__dirname, '../', dir);
