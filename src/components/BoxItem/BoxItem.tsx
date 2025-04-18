import React, { PropsWithChildren } from 'react';

export interface BoxItemType extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
}

export default function BoxItem({ children, ref, columns, rows, flexShrink, flexGrow, flexBasis }: BoxItemType) {
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
            {children}
        </div>
    );
}
