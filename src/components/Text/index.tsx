import { type Config } from '@measured/puck';
import { theme } from '../Theme/theme';
import Text from './Text';
import { FontSizeField } from "../CustomFields";

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
        },
        fontFamily: {
            type: 'select',
            label: 'Font family',
            options: theme.fonts,
        },
        fontSize: {
            type: 'custom',
            render: ({ value, onChange }) => <FontSizeField value={value} onChange={onChange} />,
        }
    },
    render: ({ content, color, fontFamily }) => <Text color={color} fontFamily={fontFamily} >{content}</Text>,
} satisfies Config['components']['key'];