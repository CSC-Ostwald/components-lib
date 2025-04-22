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
                { label: 'Image 1', value: 'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png' },
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
