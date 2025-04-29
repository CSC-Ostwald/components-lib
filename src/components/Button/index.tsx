import { type Config } from '@measured/puck';
import Button from './Button';
import { properties } from '../Theme';
import { ParentResolver } from '../../utilities/ParentResolver';

const ButtonConfig = {
    fields: {
        content: properties.content,
        href: properties.href,
        color: properties.color,
        backgroundColor: properties.backgroundColor,
        backgroundImage: properties.backgroundImage,
        fontFamily: properties.fontFamily,
        fontSize: properties.fontSize,
        margin: properties.margin,
        padding: properties.padding,
        borderRadius: properties.borderRadius,
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        content: 'Votre texte ...',
        color: 'black',
        backgroundColor: 'transparent',
        backgroundImage: '',
        fontFamily: 'Roboto',
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
