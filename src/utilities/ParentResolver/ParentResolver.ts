export default class ParentResolver {
    static resolve = (data, { parent, fields }) => {
        if (parent?.type === 'Grid') {
            return {
                columns: { type: 'number', label: 'Nombre de colonnes' },
                rows: { type: 'number', label: 'Nombre de lignes' },
                ...fields,
            };
        }
        if (parent?.type === 'FlexBox') {
            return {
                flexGrow: { type: 'number' },
                flexShrink: { type: 'number' },
                flexBasis: { type: 'text' },
                alignSelf: {
                    type: 'select',
                    label: 'Alignement vertical',
                    options: [
                        { label: 'Start', value: 'start' },
                        { label: 'End', value: 'end' },
                        { label: 'Stretch', value: 'stretch' },
                        { label: 'Center', value: 'center' },
                    ],
                },
                JustifySelf: {
                    type: 'select',
                    label: 'Alignement horizontal',
                    options: [
                        { label: 'Start', value: 'start' },
                        { label: 'End', value: 'end' },
                        { label: 'Stretch', value: 'stretch' },
                        { label: 'Center', value: 'center' },
                    ],
                },
                ...fields,
            };
        }
        return fields;
    };

    static defaultProps = () => {
        return {
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 'auto',
            alignSelf: 'start',
            justifySelf: 'start',
        };
    };
}
