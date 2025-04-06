import { DropZone } from '@measured/puck';

export default function FlexBox() {
    return (
        <DropZone
            zone="flex-zone"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        />
    );
}
