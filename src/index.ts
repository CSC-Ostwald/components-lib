import { type Config } from '@measured/puck';
import { categories } from './categories';
import root from './root';
import Test from './components/Test/Test';
import { Text, Grid, GridItem } from './components';

export default {
    root,
    categories,
    components: {
        //... Add components here
        Test,
        Text,
        Grid,
        GridItem,
    },
} satisfies Config;
