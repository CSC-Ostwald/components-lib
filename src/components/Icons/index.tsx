import { type Config } from '@measured/puck';
import Icon from './Icon';
import { properties } from '../Properties';
import { ParentResolver } from '../../utilities/ParentResolver';

const IconConfig = {
    fields: {
        iconName: properties.iconName,
        minWidth: properties.minWidth,
        minHeight: properties.minHeight,
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        iconName: 'calendar',
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, ...fields }) => <Icon ref={puck.dragRef} {...fields} />,
} satisfies Config['components']['key'];

export default IconConfig;
