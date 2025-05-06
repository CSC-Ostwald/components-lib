import { properties } from '../../components/Properties';

export default class ParentResolver {
    static resolve = (data, { parent, fields }) => {
        if (parent?.type === 'Grid') {
            return {
                boxHelper: properties.boxHelper,
                columns: properties.columns,
                rows: properties.rows,
                ...fields,
            };
        }
        if (parent?.type === 'FlexBox') {
            return {
                boxHelper: properties.boxHelper,
                flexGrow: properties.flexGrow,
                flexShrink: properties.flexShrink,
                alignSelf: properties.alignSelf,
                placeContent: properties.placeContent,
                ...fields,
            };
        }
        return fields;
    };

    static defaultProps = () => {
        return {
            boxHelper: 'none',
            flexGrow: 1,
            flexShrink: 1,
            alignSelf: 'start',
            placeContent: 'start',
        };
    };
}
