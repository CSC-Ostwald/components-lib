import { type Config } from '@measured/puck';
import TestItem from './TestItem';
import { ParentResolver } from '../../utilities/ParentResolver';
import { properties } from '../Theme';

export default {
    fields: {
        minWidth: properties.minWidth,
        minHeight: properties.minHeight,
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        minWidth: 100,
        minHeight: 150,
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, ...fields }) => <TestItem ref={puck.dragRef} {...fields} />,
} satisfies Config['components']['key'];
