import { ConfigEnv, UserConfig } from 'vite';
import merge from 'deepmerge';

import { Configure } from './types';
import { pathResolve } from './utils';
import { createPlugins } from './plugins';

/**
 * 生成自定义的配置 或 自定义配置设置成控对象
 * @param params 用于接收vite默认的环境参数
 * @param configure 用于接收一个自定义的配置生成函数
 * @returns 合并并覆盖预定义配置，返回最终的配置
 */
export const createConfig = (params: ConfigEnv, configure?: Configure): UserConfig => {
    const isBuild = params.command === 'build';
    return merge<UserConfig>(
        {
            resolve: {
                alias: {
                    '@': pathResolve('src'),
                },
            },
            css: {
                modules: {
                    localsConvention: 'camelCaseOnly',
                },
            },
            plugins: createPlugins(isBuild),
        },
        typeof configure === 'function' ? configure(params, isBuild) : {},
        {
            arrayMerge: (_d, s, _o) => Array.from(new Set([..._d, ...s])),
        },
    );
};
