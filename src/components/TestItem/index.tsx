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

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({
        puck,
        minWidth,
        minHeight,
        columns = 1,
        rows = 1,
        flexGrow = 1,
        flexShrink = 1,
        flexBasis = 'auto',
    }) => (
        <TestItem
            ref={puck.dragRef}
            columns={columns}
            rows={rows}
            flexGrow={flexGrow}
            flexShrink={flexShrink}
            flexBasis={flexBasis}
            minHeight={minHeight}
            minWidth={minWidth}
        />
    ),
} satisfies Config['components']['key'];
