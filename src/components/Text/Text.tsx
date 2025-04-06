import type { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
}

export default function Text({
    children,
    ref,
    columns,
    rows,
    flexGrow,
    flexShrink,
    flexBasis,
    color,
    fontFamily,
    fontSize,
    textAlign,
}: TextProps) {
    return (
        <p
            ref={ref}
            style={{
                gridColumn: `span ${columns || 1}`,
                gridRow: `span ${rows || 1}`,
                flexGrow: flexGrow ?? 1,
                flexShrink: flexShrink ?? 1,
                flexBasis: flexBasis ?? 'auto',
                color,
                fontFamily,
                fontSize,
                textAlign,
            }}
        >
            {children}
        </p>
    );
}
