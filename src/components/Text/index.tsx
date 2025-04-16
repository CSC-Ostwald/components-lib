import { type Config } from '@measured/puck';
import { theme } from '../Theme/theme';
import Text from './Text';
import { RangeField } from '../CustomFields';
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
            render: ({ onChange }) => (
                <RangeField
                    baseValue={12}
                    onChange={onChange}
                    minValue={6}
                    maxValue={72}
                    step={2}
                    label={'Font size'}
                />
            ),
        },
        textAlign: {
            type: 'select',
            label: 'Alignement',
            options: theme.textAligns,
        },
        margin: {
            type: 'custom',
            render: ({ onChange }) => (
                <RangeField baseValue={24} onChange={onChange} minValue={0} maxValue={72} step={2} label={'Margin'} />
            ),
        },
        padding: {
            type: 'custom',
            render: ({ onChange }) => (
                <RangeField baseValue={2} onChange={onChange} minValue={0} maxValue={72} step={2} label={'Padding'} />
            ),
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
