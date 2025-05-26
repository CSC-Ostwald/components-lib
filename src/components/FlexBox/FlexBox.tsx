import { DropZone } from '@measured/puck';

export interface FlexBoxProps {
    flexDirection?: 'row' | 'column';
    backgroundImage?: string;
}

export function FlexBox({ flexDirection, backgroundImage }: FlexBoxProps) {
    return (
        <DropZone
            zone="flex-zone"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: '100% 100%',
            }}
        />
    );
}
