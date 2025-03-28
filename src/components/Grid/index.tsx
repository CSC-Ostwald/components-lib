import { type Config } from '@measured/puck';
import Grid from './Grid';

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
    render: ({ columns = 2, rows = 2 }) => <Grid columns={columns} rows={rows}></Grid>,
} satisfies Config['components']['key'];
