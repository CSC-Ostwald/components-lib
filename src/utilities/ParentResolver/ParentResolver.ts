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
                ...fields,
            };
        }
        return fields;
    };

    static defaultProps = () => {
        return {
            flexGrow: 1,
            flexShrink: 1,
            alignSelf: 'start',
            placeContent: 'start',
        };
    };
}
