import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-links'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
