import { type Config } from '@measured/puck';
import { properties } from '../Theme';
import Text from './Text';
import { RangeField } from '../CustomFields';
import { ParentResolver } from '../../utilities/ParentResolver';

const TextConfig = {
    fields: {
        content: properties.content,
        color: properties.color,
        backgroundColor: properties.backgroundColor,
        fontFamily: properties.fontFamily,
        fontSize: properties.fontSize,
        textAlign: properties.textAlign,
        margin: properties.margin,
        padding: properties.padding,
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        content: 'Votre texte ...',
        color: 'black',
        backgroundColor: 'transparent',
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

export default TextConfig;
