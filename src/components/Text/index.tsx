import { type Config } from '@measured/puck';
import { properties } from '../Properties';
import Text from './Text';
import { ParentResolver } from '../../utilities/ParentResolver';

const TextConfig = {
    fields: {
        content: properties.content,
        color: properties.color,
        backgroundColor: properties.backgroundColor,
        backgroundImage: properties.backgroundImage,
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
        backgroundImage: '',
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
