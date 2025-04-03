import { type Config } from '@measured/puck';
import { theme } from '../Theme/theme';
import Text from './Text';
import { FontSizeField } from '../CustomFields';
import { GridResolver } from '../../utilities/GridResolver';

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
        // fontSize: {
        //     type: 'custom',
        //     render: ({ onChange }) => <FontSizeField value={16} onChange={onChange} />,
        // },
        textAlign: {
            type: 'select',
            label: 'Alignement',
            options: theme.textAligns,
        },
    },

    inline: true,
    resolveFields: GridResolver.resolve,

    render: ({ content, color = 'black', fontFamily = 'Roboto', fontSize, textAlign = 'left' }) => (
        <Text color={color} fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign}>
            {content}
        </Text>
    ),
} satisfies Config['components']['key'];
