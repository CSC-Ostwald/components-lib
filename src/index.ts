import { type Config } from '@measured/puck';
import { categories } from './categories';
import root from './root';
import { TestItem, Text, Button, FlexBox, Grid, Icon } from './components';

export default {
    root,
    categories,
    components: {
        TestItem,
        Text,
        Button,
        FlexBox,
        Grid,
        Icon,
    },
} satisfies Config;
