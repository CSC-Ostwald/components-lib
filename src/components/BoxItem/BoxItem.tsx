import React from 'react';

export interface BoxItemType {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    itemChildren?: React.ReactNode;
}

export default function BoxItem({ itemChildren, ref, columns, rows, flexShrink, flexGrow, flexBasis }: BoxItemType) {
    return (
        <div
            ref={ref}
            style={{
                gridColumn: `span ${columns}`,
                gridRow: `span ${rows}`,
                flexGrow,
                flexShrink,
                flexBasis,
            }}
        >
            {itemChildren}
        </div>
    );
}
