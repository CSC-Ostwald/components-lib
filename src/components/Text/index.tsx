import { type Config } from '@measured/puck';
import { theme } from '../Theme/theme';
import Text from './Text';

export default {
    fields: {
        content: {
            type: 'textarea',
            label: 'Content',
        },
        color: {
            type: 'select',
            label: 'Text color',
            options: theme.colors,
        }
    },
    render: ({ content, color }) => <Text color={color} >{content}</Text>,
} satisfies Config['components']['key'];