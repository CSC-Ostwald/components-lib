import { type Config } from '@measured/puck';
import { categories } from './categories';
import root from './root';
import { Text, FlexBox, Grid, GridItem } from './components';

export default {
    root,
    categories,
    components: {
        //... Add components here
        Text,
        FlexBox,
        Grid,
        GridItem,
    },
} satisfies Config;
