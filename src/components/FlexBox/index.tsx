import { type Config } from '@measured/puck';
import FlexBox from './FlexBox';

export default {
    fields: {
        backgroundImage: {
            type: 'select',
            label: 'Image de fond',
            options: [
                { label: 'Aucune', value: '' },
                { label: 'Image 1', value: 'https://placehold.co/600x400' },
            ],
        },
    },

    defaultProps: {
        backgroundImage: '',
    },

    render: () => <FlexBox />,
} satisfies Config['components']['key'];
