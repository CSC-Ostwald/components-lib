import { type Config } from '@measured/puck';
import BaseIcon from './BaseIcon';
import { properties } from '../Properties';
import { ParentResolver } from '../../utilities/ParentResolver';

const BaseIconConfig = {
    fields: {
        icon: {
            type: 'select',
            label: 'Icon',
            options: [
                { label: 'Icon 1', value: 'icon1' },
                { label: 'Icon 2', value: 'icon2' },
                { label: 'Icon 3', value: 'icon3' },
            ],
        },
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, ...fields }) => <BaseIcon ref={puck.dragRef} {...fields} />,
} satisfies Config['components']['key'];

export default BaseIconConfig;
