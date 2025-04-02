export default class GridResolver {
    static resolve = ({ parent }) => {
        const fields = {
            columns: { type: 'number', label: 'nombre de colonnes' },
            rows: { type: 'number', label: 'nombre de lignes' },
        };

        if (parent?.type === 'Grid') {
            return fields;
        } else return;
    };
}
