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
                ...fields,
            };
        }
        return fields;
    };
}
