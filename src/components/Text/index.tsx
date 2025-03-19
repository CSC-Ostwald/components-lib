import { type Config } from '@measured/puck';
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
            options: [
                { value: 'black', label: 'Black' },
                { value: 'red', label: 'Red' },
                { value: 'blue', label: 'Blue' },
                { value: 'green', label: 'Green' },
            ],
        }
    },
    render: ({ content, color }) => <Text color={color} >{content}</Text>,
} satisfies Config['components']['key'];