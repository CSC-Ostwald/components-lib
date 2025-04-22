import { DropZone } from '@measured/puck';

export interface FlexBoxProps {
    backgroundImage?: string;
}

export default function FlexBox({ backgroundImage }: FlexBoxProps) {
    return (
        <DropZone
            zone="flex-zone"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundImage: `url(${backgroundImage})`,
            }}
        />
    );
}
