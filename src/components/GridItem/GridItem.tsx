import { DropZone } from '@measured/puck';

interface GridItemProps {
    columns?: number;
    rows?: number;
    ref?: ((element: Element | null) => void) | null;
}

export default function GridItem({ columns, rows, ref }: GridItemProps) {
    return (
        <DropZone
            ref={ref}
            zone="grid-item-zone"
            style={{
                gridColumn: `span ${columns || 1}`,
                gridRow: `span ${rows || 1}`,
            }}
            disallow={['GridItem']}
        />
    );
}
