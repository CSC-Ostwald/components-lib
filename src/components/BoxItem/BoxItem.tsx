import React, { PropsWithChildren } from 'react';

export interface BoxItemType extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    alignSelf?: string;
}

export default function BoxItem({
    children,
    ref,
    columns,
    rows,
    flexShrink,
    flexGrow,
    flexBasis,
    alignSelf,
}: BoxItemType) {
    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                gridColumn: `span ${columns}`,
                gridRow: `span ${rows}`,
                placeContent: 'center',
                backgroundColor: '#F0F',
                flexGrow,
                flexShrink,
                flexBasis,
                alignSelf,
            }}
        >
            {children}
        </div>
    );
}
