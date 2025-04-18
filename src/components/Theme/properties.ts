import { theme } from './theme';
import { Fields } from '@measured/puck';

export const properties = {
    // CONTENT
    content: {
        type: 'textarea',
        label: 'Content',
    },

    // COLOR PROPERTIES
    color: {
        type: 'select',
        label: 'Text color',
        options: theme.colors,
    },
    backgroundColor: {
        type: 'select',
        label: 'Background color',
        options: theme.backgroundColors,
    },

    // TEXT RELATED PROPERTIES
    fontFamily: {
        type: 'select',
        label: 'Font family',
        options: theme.fonts,
    },
    textAlign: {
        type: 'select',
        label: 'Alignement',
        options: theme.textAligns,
    },
};
