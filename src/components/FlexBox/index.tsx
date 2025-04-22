import { type Config } from '@measured/puck';
import FlexBox from './FlexBox';

export default {
    fields: {
        flexDirection: {
            type: 'select',
            label: 'Direction',
            options: [
                { label: 'Colonne', value: 'column' },
                { label: 'Ligne', value: 'row' },
            ],
        },
        justifyContent: {
            type: 'select',
            label: 'Alignement',
            options: [
                { label: 'Start', value: 'start' },
                { label: 'Center', value: 'center' },
                { label: 'Space between', value: 'space-between' },
                { label: 'Space around', value: 'space-around' },
            ],
        },
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
