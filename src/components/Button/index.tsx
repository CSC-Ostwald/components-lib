import { type Config } from '@measured/puck';
import { Button } from './Button';
import { properties } from '../Properties';
import { ParentResolver } from '../../utilities';

export const ButtonConfig = {
    fields: {
        content: properties.content,
        url: properties.url,
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
