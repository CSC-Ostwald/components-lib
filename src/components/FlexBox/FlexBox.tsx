import { DropZone } from '@measured/puck';

export interface FlexBoxProps {
    flexDirection?: 'row' | 'column';
    justifyContent?: string;
    backgroundImage?: string;
}

export default function FlexBox({ flexDirection, justifyContent, backgroundImage }: FlexBoxProps) {
    return (
        <DropZone
            zone="flex-zone"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection,
                justifyContent,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: '100% 100%',
            }}
        />
    );
}
