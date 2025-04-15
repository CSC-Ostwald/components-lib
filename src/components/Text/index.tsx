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
        backgroundColor: {
            type: 'select',
            label: 'Background color',
            options: theme.backgroundColors,
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
        ...ParentResolver.defaultProps(),
        content: 'Votre texte ...',
        color: 'black',
        backgroundColor: 'none',
        fontFamily: 'Roboto',
        textAlign: 'left',
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, content, ...fields }) => (
        <Text ref={puck.dragRef} {...fields}>
            {content}
        </Text>
    ),
} satisfies Config['components']['key'];
