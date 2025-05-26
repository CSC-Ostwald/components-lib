import { DropZone } from '@measured/puck';

interface GridProps {
    columns?: number;
    rows?: number;
    backgroundImage?: string;
}

export function Grid({ columns, rows, backgroundImage }: GridProps) {
    return (
        <DropZone
            zone="grid-zone"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, auto)`,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: '100% 100%',
            }}
        />
    );
}
