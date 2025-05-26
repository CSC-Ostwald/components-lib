import { type Config } from '@measured/puck';
import { FlexBox } from './FlexBox';
import { properties } from '../Properties';

export const FlexBoxConfig = {
    fields: {
        flexDirection: properties.flexDirection,
        backgroundImage: properties.backgroundImage,
    },

    defaultProps: {
        flexDirection: 'row',
        backgroundImage: '',
    },

    render: ({ ...fields }) => <FlexBox {...fields} />,
} satisfies Config['components']['key'];
