import { type Config } from '@measured/puck';
import { properties } from '../Properties';
import { Grid } from './Grid';

export const GridConfig = {
    fields: {
        columns: properties.columns,
        rows: properties.rows,
        backgroundImage: properties.backgroundImage,
    },

    defaultProps: {
        columns: 1,
        rows: 1,
        backgroundImage: '',
    },

    render: ({ ...fields }) => <Grid {...fields}></Grid>,
} satisfies Config['components']['key'];
