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
    maxWidth: {
        type: 'number',
        label: 'Largeur maximum',
    },
    maxHeight: {
        type: 'number',
        label: 'Hauteur maximum',
    },
    width: {
        type: 'number',
        label: 'Largeur',
    },
    height: {
        type: 'number',
        label: 'Hauteur',
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
    flexGrow: {
        type: 'number',
        label: 'Flex grow',
    },
    flexShrink: {
        type: 'number',
        label: 'Flex shrink',
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
    alignSelf: {
        type: 'select',
        label: 'Alignement dans son parent',
        options: [
            { label: 'Start', value: 'start' },
            { label: 'End', value: 'end' },
            { label: 'Stretch', value: 'stretch' },
            { label: 'Center', value: 'center' },
        ],
    },
    placeContent: {
        type: 'select',
        label: 'Placement du contenu',
        options: [
            { label: 'Start', value: 'start' },
            { label: 'End', value: 'end' },
            { label: 'Stretch', value: 'stretch' },
            { label: 'Center', value: 'center' },
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
        label: 'Icone',
        options: theme.iconName,
    },
    iconSize: {
        type: 'select',
        label: "Taille d'icone",
        options: [
            { label: 'Mini', value: 16 },
            { label: 'Petite', value: 32 },
            { label: 'Moyenne', value: 64 },
            { label: 'Grande', value: 128 },
        ],
    },

    // HELPERS
    boxHelper: {
        type: 'radio',
        label: 'Box helper',
        options: [
            { label: 'Off', value: 'none' },
            {
                label: 'On',
                value: 'repeating-linear-gradient( 45deg, #453c1d, #453c1d 3px, #f5d362 1px, #f5d362 12px )',
            },
        ],
    },
} as const satisfies Fields;
