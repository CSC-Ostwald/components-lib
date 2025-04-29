import { Fields } from '@measured/puck';
import { RangeField } from '../../components/CustomFields';
import { theme } from '../../theme';

export const fieldTemplates = {
    content: () => ({
        type: 'textarea',
        label: 'Content',
    }),
    color: () => ({
        type: 'select',
        label: 'Text color',
        options: theme.colors,
    }),
    fontFamily: () => ({
        type: 'select',
        label: 'Font family',
        options: theme.fonts,
    }),
    margin: (options: { baseValue: number; minValue?: number; maxValue?: number; step?: number }) => ({
        type: 'custom',
        render: ({ onChange }) => (
            <RangeField
                baseValue={options.baseValue}
                minValue={options.minValue ?? 0}
                maxValue={options.maxValue ?? 72}
                step={options.step ?? 2}
                label="Margin"
                onChange={onChange}
            />
        ),
    }),
    fontSize: (options: { baseValue: number; minValue?: number; maxValue?: number; step?: number }) => ({
        type: 'custom',
        render: ({ onChange }) => (
            <RangeField
                baseValue={options.baseValue}
                minValue={options.minValue ?? 6}
                maxValue={options.maxValue ?? 72}
                step={options.step ?? 2}
                label="Font size"
                onChange={onChange}
            />
        ),
    }),
    minWidth: () => ({
        type: 'number',
        label: 'Largeur minimum',
    }),
    minHeight: () => ({
        type: 'number',
        label: 'Hauteur minimum',
    }),
} as const;
