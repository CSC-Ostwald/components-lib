import { type Config } from '@measured/puck';
import { theme } from '../Theme/theme';
import Text from './Text';
import { FontSizeField } from '../CustomFields';
import { ParentResolver } from '../../utilities/ParentResolver';

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
            render: ({ onChange }) => <FontSizeField value={16} onChange={onChange} />,
        },
        textAlign: {
            type: 'select',
            label: 'Alignement',
            options: theme.textAligns,
        },
    },

    defaultProps: {
        content: 'Votre texte ...',
        color: 'black',
        fontFamily: 'Roboto',
        textAlign: 'left',
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({
        puck,
        content,
        color,
        fontFamily,
        fontSize,
        textAlign,
        columns,
        rows,
        flexGrow,
        flexShrink,
        flexBasis,
    }) => (
        <Text
            ref={puck.dragRef}
            columns={columns}
            rows={rows}
            color={color}
            flexGrow={flexGrow}
            flexShrink={flexShrink}
            flexBasis={flexBasis}
            fontFamily={fontFamily}
            fontSize={fontSize}
            textAlign={textAlign}
        >
            {content}
        </Text>
    ),
} satisfies Config['components']['key'];
