import type { PropsWithChildren } from 'react';

export interface BoxItemType extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
}

function BoxItem({ children, ref, columns, rows, flexShrink, flexGrow, flexBasis }: BoxItemType) {
    return (
        <div
            ref={ref}
            style={{
                gridColumn: columns ? `span ${columns}` : undefined,
                gridRow: rows ? `span ${rows}` : undefined,
                flexGrow,
                flexShrink,
                flexBasis,
            }}
        >
            {children}
        </div>
    );
}
