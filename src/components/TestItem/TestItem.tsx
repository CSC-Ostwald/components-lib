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
                gridColumn: `span ${columns || 1}`,
                gridRow: `span ${rows || 1}`,
                flexGrow: flexGrow ?? 1,
                flexShrink: flexShrink ?? 1,
                flexBasis: flexBasis ?? 'auto',
                backgroundColor: '#F0F',
                border: '3px solid #000',
                minWidth: minWidth ?? 100,
                minHeight: minHeight ?? 100,
            }}
        >
            {children}
        </div>
    );
}
