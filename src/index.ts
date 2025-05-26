import { type Config } from '@measured/puck';
import { categories } from './categories';
import root from './root';
import { TestItemConfig, TextConfig, ButtonConfig, FlexBoxConfig, GridConfig, IconConfig } from './components';

export default {
    root,
    categories,
    components: {
        TestItem: TestItemConfig,
        Text: TextConfig,
        Button: ButtonConfig,
        FlexBox: FlexBoxConfig,
        Grid: GridConfig,
        Icon: IconConfig,
    },
} satisfies Config;
