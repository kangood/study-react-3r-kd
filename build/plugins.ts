import { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import { viteMockServe } from 'vite-plugin-mock';

/**
 * 插件创建函数，用于放置所有的vite插件
 * @param isBuild 是否处于构建环境中（即生产环境）
 */
export function createPlugins(isBuild: boolean) {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        react(),
        Icons({ compiler: 'jsx', jsx: 'react' }),
        viteMockServe({
            ignore: /^_/,
            mockPath: 'mock',
            enable: !isBuild,
        }),
    ];
    return vitePlugins;
}
