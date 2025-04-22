import { type Config } from '@measured/puck';
import FlexBox from './FlexBox';
import { properties } from '../Theme';

export default {
    fields: {
        flexDirection: properties.flexDirection,
        justifyContent: properties.justifyContent,
        backgroundImage: {
            type: 'select',
            label: 'Image de fond',
            options: [
                { label: 'Aucune', value: '' },
                { label: 'Custom 1', value: 'src/components/Theme/icons/customBackground.svg' },
            ],
        },
    },

    defaultProps: {
        flexDirection: 'row',
        justifyContent: 'start',
        backgroundImage: '',
    },

    render: ({ ...fields }) => <FlexBox {...fields} />,
} satisfies Config['components']['key'];
