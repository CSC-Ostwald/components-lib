import { type Config } from '@measured/puck';
import FlexBox from './FlexBox';
import { properties } from '../../utilities/Theme';

export default {
    fields: {
        flexDirection: properties.flexDirection,
        justifyContent: properties.justifyContent,
        backgroundImage: properties.backgroundImage,
    },

    defaultProps: {
        flexDirection: 'row',
        justifyContent: 'start',
        backgroundImage: '',
    },

    render: ({ ...fields }) => <FlexBox {...fields} />,
} satisfies Config['components']['key'];
