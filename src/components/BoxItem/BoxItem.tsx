import React, { PropsWithChildren } from 'react';

export interface BoxItemType extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    alignSelf?: 'start' | 'center' | 'end' | 'stretch';
    placeContent?: 'start' | 'center' | 'end' | 'stretch';
    boxHelper?: string;
}

export default function BoxItem({
    children,
    ref,
    columns,
    rows,
    flexShrink,
    flexGrow,
    alignSelf,
    placeContent,
    boxHelper,
}: BoxItemType) {
    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                gridColumn: `span ${columns}`,
                gridRow: `span ${rows}`,
                background: boxHelper,
                flexGrow,
                flexShrink,
                alignSelf,
                placeContent,
            }}
        >
            {children}
        </div>
    );
}
