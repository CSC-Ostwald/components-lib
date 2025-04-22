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
        options: [
            { value: 'left', label: 'Gauche' },
            { value: 'center', label: 'Centre' },
            { value: 'right', label: 'Droite' },
            { value: 'justify', label: 'Justifié' },
        ],
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

    // FLEX RELATED PROPERTIES
    flexDirection: {
        type: 'select',
        label: 'Direction',
        options: [
            { label: 'Colonne', value: 'column' },
            { label: 'Ligne', value: 'row' },
        ],
    },
    justifyContent: {
        type: 'select',
        label: 'Alignement',
        options: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'Space between', value: 'space-between' },
            { label: 'Space around', value: 'space-around' },
        ],
    },
} as const satisfies Fields;
