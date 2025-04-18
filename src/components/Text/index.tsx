import { type Config } from '@measured/puck';
import { properties, theme } from '../Theme';
import Text from './Text';
import { RangeField } from '../CustomFields';
import { ParentResolver } from '../../utilities/ParentResolver';

const TextConfig = {
    fields: {
        content: {
            type: 'textarea',
            label: 'Content',
        },
        color: {
            type: properties.color.type,
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
                    baseValue={TextConfig.defaultProps.fontSize}
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
                <RangeField
                    baseValue={TextConfig.defaultProps.margin}
                    onChange={onChange}
                    minValue={0}
                    maxValue={72}
                    step={2}
                    label={'Margin'}
                />
            ),
        },
        padding: {
            type: 'custom',
            render: ({ onChange }) => (
                <RangeField
                    baseValue={TextConfig.defaultProps.padding}
                    onChange={onChange}
                    minValue={0}
                    maxValue={72}
                    step={2}
                    label={'Padding'}
                />
            ),
        },
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        content: 'Votre texte ...',
        color: 'black',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto',
        fontSize: 16,
        margin: 0,
        padding: 0,
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

export default TextConfig;
