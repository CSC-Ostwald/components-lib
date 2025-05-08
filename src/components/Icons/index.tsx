import { type Config } from '@measured/puck';
import Icon from './Icon';
import { properties } from '../Properties';
import { ParentResolver } from '../../utilities/ParentResolver';

const IconConfig = {
    fields: {
        url: properties.url,
        iconName: properties.iconName,
        width: properties.iconSize,
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        url: '',
        iconName: 'calendar',
        width: 16,
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, ...fields }) => <Icon ref={puck.dragRef} {...fields} />,
} satisfies Config['components']['key'];

export default IconConfig;
