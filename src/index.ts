import { type Config } from '@measured/puck';
import { categories } from './categories';
import root from './root';
import { TestItem, Text, FlexBox, Grid, GridItem } from './components';

export default {
    root,
    categories,
    components: {
        TestItem,
        //... Add components here
        Text,
        FlexBox,
        Grid,
        GridItem,
    },
} satisfies Config;
