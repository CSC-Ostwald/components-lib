import { type Config } from '@measured/puck';
import TestItem from './TestItem';
import { ParentResolver } from '../../utilities/ParentResolver';

export default {
    fields: {
        minWidth: {
            type: 'number',
            label: 'Largeur minimum',
        },
        minHeight: {
            type: 'number',
            label: 'Hauteur minimum',
        },
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        minWidth: 100,
        minHeight: 150,
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, minWidth, minHeight, ...boxItemProps }) => (
        <TestItem ref={puck.dragRef} minWidth={minWidth} minHeight={minHeight} {...boxItemProps} />
    ),
} satisfies Config['components']['key'];
