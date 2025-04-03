export default class GridResolver {
    static resolve = (data, { parent, fields }) => {
        if (parent?.type === 'Grid') {
            return {
                columns: { type: 'number', label: 'Nombre de colonnes' },
                rows: { type: 'number', label: 'Nombre de lignes' },
                ...fields,
            };
        }
        return fields;
    };
}
