import { Button, ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

import $styles from './App.module.css';

export default () => {
    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#00B96B',
                },
                components: {
                    Layout: {
                        colorBgBody: '',
                    },
                },
            }}
        >
            <StyleProvider hashPriority="high">
                <div className={$styles.app}>
                    <div className={$styles.container}>
                        欢迎来到3R教室，这是<span>React课程第一节</span>
                        <Button
                            type="primary"
                            className="!tw-bg-lime-400 !tw-text-emerald-900"
                            href="https://pincman.com/3r"
                            target="_blank"
                        >
                            点此打开
                        </Button>
                    </div>
                </div>
            </StyleProvider>
        </ConfigProvider>
    );
};
