import type { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    minWidth?: number;
    minHeight?: number;
}

export default function TestItem({
    children,
    ref,
    columns,
    rows,
    flexShrink,
    flexBasis,
    flexGrow,
    minHeight,
    minWidth,
}: TextProps) {
    return (
        <div
            ref={ref}
            style={{
                gridColumn: columns,
                gridRow: rows,
                flexGrow,
                flexShrink,
                flexBasis,
                backgroundColor: '#F0F',
                border: '3px solid #000',
                minWidth,
                minHeight,
            }}
        >
            {children}
        </div>
    );
}
