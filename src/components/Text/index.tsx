import { type Config } from '@measured/puck';
import { properties } from '../Theme/properties';
import Text from './Text';
import { RangeField } from '../CustomFields';
import { ParentResolver } from '../../utilities/ParentResolver';

const TextConfig = {
    fields: {
        content: properties.content,
        color: properties.color,
        backgroundColor: properties.backgroundColor,
        fontFamily: properties.fontFamily,
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
        textAlign: properties.textAlign,
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
