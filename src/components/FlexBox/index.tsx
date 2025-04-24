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
                { label: 'Custom Vert', value: 'src/components/Theme/assets/customBackgroundGreen.svg' },
                { label: 'Custom Brun', value: 'src/components/Theme/assets/customBackgroundBrown.svg' },
                { label: 'Custom Bleu', value: 'src/components/Theme/assets/customBackgroundBlue.svg' },
                { label: 'Custom Orange', value: 'src/components/Theme/assets/customBackgroundOrange.svg' },
                { label: 'Custom Rouge', value: 'src/components/Theme/assets/customBackgroundRed.svg' },
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
