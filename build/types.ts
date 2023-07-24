import { ConfigEnv, UserConfig } from 'vite';

/**
 * vite自定义配置生成函数的类型，isBuild 为是否处于构建环境中（即生产环境）
 */
export type Configure = (params: ConfigEnv, isBuild: boolean) => UserConfig;
