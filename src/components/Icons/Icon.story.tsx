import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        url: { control: 'text' },
        iconName: { control: 'text' },
        width: { control: 'number' },
    },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        url: 'https://example.com',
        iconName: 'calendar',
        width: 64,
    },
};

export default meta;
