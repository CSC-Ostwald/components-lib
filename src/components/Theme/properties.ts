import { theme } from './theme';
import { Fields } from '@measured/puck';
import { RangeField } from '../CustomFields';

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

    // MARGIN, PADDING AND SIZES
    minWidth: {
        type: 'number',
        label: 'Largeur minimum',
    },
    minHeight: {
        type: 'number',
        label: 'Hauteur minimum',
    },
} as const satisfies Fields;
