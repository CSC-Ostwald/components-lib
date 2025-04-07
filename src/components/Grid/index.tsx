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

    defaultProps: {
        columns: 1,
        rows: 1,
    },

    render: ({ columns, rows }) => <Grid columns={columns} rows={rows}></Grid>,
} satisfies Config['components']['key'];
