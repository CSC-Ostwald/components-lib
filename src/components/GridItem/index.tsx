import { type Config } from '@measured/puck';
import GridItem from './GridItem';

export default {
    fields: {
        columns: {
            type: 'number',
            label: 'Nombre de colonnes',
        },
        rows: {
            type: 'number',
            label: 'Nombre de lignes',
        },
    },
    inline: true,
    render: ({ columns = 1, rows = 1, puck }) => <GridItem ref={puck.dragRef} columns={columns} rows={rows}></GridItem>,
} satisfies Config['components']['key'];
