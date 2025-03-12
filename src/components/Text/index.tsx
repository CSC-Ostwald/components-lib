import { type Config } from '@measured/puck';
import Text from './Text';

export default {
    fields: {
        content: {
            type: 'textarea',
            label: 'Content',
        },
    },
    render: ({ content }) => <Text>{content}</Text>,
} satisfies Config['components']['key'];