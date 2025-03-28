import { type Config } from '@measured/puck';
import { categories } from './categories';
import root from './root';
import Test from './components/Test/Test';
import { Text, Grid } from './components';

export default {
    root,
    categories,
    components: {
        //... Add components here
        Test,
        Text,
        Grid,
    },
} satisfies Config;
