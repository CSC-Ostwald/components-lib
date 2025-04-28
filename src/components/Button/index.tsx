import { type Config } from '@measured/puck';
import { theme } from '../../utilities/Theme/theme';
import Button from './Button';
import { RangeField } from '../CustomFields';
import { ParentResolver } from '../../utilities/ParentResolver';

const ButtonConfig = {
    fields: {
        content: {
            type: 'textarea',
            label: 'Content',
        },
        href: {
            type: 'text',
            label: 'URL',
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
                    baseValue={ButtonConfig.defaultProps.fontSize}
                    onChange={onChange}
                    minValue={6}
                    maxValue={72}
                    step={2}
                    label={'Font size'}
                />
            ),
        },
        margin: {
            type: 'custom',
            render: ({ onChange }) => (
                <RangeField
                    baseValue={ButtonConfig.defaultProps.margin}
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
                    baseValue={ButtonConfig.defaultProps.padding}
                    onChange={onChange}
                    minValue={0}
                    maxValue={72}
                    step={2}
                    label={'Padding'}
                />
            ),
        },
        borderRadius: {
            type: 'custom',
            render: ({ onChange }) => (
                <RangeField
                    baseValue={ButtonConfig.defaultProps.borderRadius}
                    onChange={onChange}
                    minValue={0}
                    maxValue={72}
                    step={2}
                    label={'Border radius'}
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
        borderRadius: 0,
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, content, ...fields }) => (
        <Button ref={puck.dragRef} {...fields}>
            {content}
        </Button>
    ),
} satisfies Config['components']['key'];

export default ButtonConfig;
