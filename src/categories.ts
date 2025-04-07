import { type Config } from '@measured/puck';

export const categories: Config['categories'] = {
    text: {
        title: 'Textes',
        components: ['Text'],
    },
    container: {
        title: 'Conteneurs',
        components: ['FlexBox', 'Grid'],
    },
};
