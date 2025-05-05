import { theme } from '../../theme';
import { Fields } from '@measured/puck';
import { RangeField } from '../CustomFields';

export const properties = {
    // CONTENT
    content: {
        type: 'textarea',
        label: 'Content',
    },
    href: {
        type: 'text',
        label: 'URL',
    },

    // COLOR AND IMAGE PROPERTIES
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
    backgroundImage: {
        type: 'select',
        label: 'Image de fond',
        options: theme.backgroundImage,
    },

    // TEXT RELATED PROPERTIES
    fontFamily: {
        type: 'select',
        label: 'Font family',
        options: theme.fonts,
    },
    fontSize: {
        type: 'custom',
        render: ({ onChange }) => (
            <RangeField baseValue={16} onChange={onChange} minValue={6} maxValue={72} step={2} label={'Font size'} />
        ),
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
    margin: {
        type: 'custom',
        render: ({ onChange }) => (
            <RangeField baseValue={0} onChange={onChange} minValue={0} maxValue={72} step={2} label={'Margin'} />
        ),
    },
    padding: {
        type: 'custom',
        render: ({ onChange }) => (
            <RangeField baseValue={0} onChange={onChange} minValue={0} maxValue={72} step={2} label={'Padding'} />
        ),
    },
    borderRadius: {
        type: 'custom',
        render: ({ onChange }) => (
            <RangeField baseValue={0} onChange={onChange} minValue={0} maxValue={72} step={2} label={'Border radius'} />
        ),
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

    // GRID RELATED PROPERTIES
    columns: {
        type: 'number',
        label: 'Nombre de colonnes',
    },
    rows: {
        type: 'number',
        label: 'Nombre de lignes',
    },

    // ICONS
    iconName: {
        type: 'select',
        label: 'Icon',
        options: theme.iconName,
    },
} as const satisfies Fields;
