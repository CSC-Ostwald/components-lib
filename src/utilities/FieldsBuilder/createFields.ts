import { fieldTemplates } from './fields';
import { Fields } from '@measured/puck';

type FieldKey = keyof typeof fieldTemplates;
type FieldOptions = {
    [K in FieldKey]?: any;
};

export const createFieldsBuilder = () => {
    let selectedFields: FieldKey[] = [];
    let options: FieldOptions = {};

    return {
        pick(fields: FieldKey[]) {
            selectedFields = fields;
            return this;
        },
        defaults(opts: FieldOptions) {
            options = opts;
            return this;
        },
        build() {
            const fields: Partial<Fields> = {};
            for (const key of selectedFields) {
                const template = fieldTemplates[key];
                const fieldOptions = options[key];
                fields[key] = template(fieldOptions);
            }
            return fields as Fields;
        },
    };
};
