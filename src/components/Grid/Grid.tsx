import { DropZone } from '@measured/puck';

interface GridProps {
    columns?: number;
    rows?: number;
}

export default function Grid({ columns, rows }: GridProps) {
    return (
        <DropZone
            zone="grid-zone"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns || 1}, 1fr)`,
                gridTemplateRows: `repeat(${rows || 1}, auto)`,
            }}
        />
    );
}
