import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        href: { control: 'text' },
        color: { control: 'color' },
        backgroundColor: { control: 'color' },
        fontFamily: { control: 'text' },
        fontSize: { control: 'number' },
        margin: { control: 'number' },
        padding: { control: 'number' },
        borderRadius: { control: 'number' },
        children: { control: 'text' },
    },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: 'https://example.com',
        color: '#ffffff',
        backgroundColor: '#007bff',
        fontSize: 16,
        margin: 8,
        padding: 12,
        borderRadius: 4,
        children: 'Click Me',
    },
};

export default meta;
