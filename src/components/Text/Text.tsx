import type { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
}

export default function Text({ children, ref, columns, rows, color, fontFamily, fontSize, textAlign }: TextProps) {
    return (
        <p
            ref={ref}
            style={{
                gridColumn: `span ${columns || 1}`,
                gridRow: `span ${rows || 1}`,
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
