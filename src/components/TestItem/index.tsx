import { type Config } from '@measured/puck';
import TestItem from './TestItem';
import { ParentResolver } from '../../utilities/ParentResolver';
import { properties } from '../Theme';
import { RangeField } from '../CustomFields';

const TestItemConfig = {
    fields: {
        minWidth: properties.minWidth,
        minHeight: properties.minHeight,
        margin: {
            type: 'custom',
            render: ({ onChange }) => (
                <RangeField
                    baseValue={TestItemConfig.defaultProps.margin}
                    onChange={onChange}
                    minValue={0}
                    maxValue={72}
                    step={2}
                    label={'Margin'}
                />
            ),
        },
    },

    defaultProps: {
        ...ParentResolver.defaultProps(),
        minWidth: 100,
        minHeight: 150,
        margin: 0,
    },

    inline: true,
    resolveFields: ParentResolver.resolve,

    render: ({ puck, ...fields }) => <TestItem ref={puck.dragRef} {...fields} />,
} satisfies Config['components']['key'];

export default TestItemConfig;
