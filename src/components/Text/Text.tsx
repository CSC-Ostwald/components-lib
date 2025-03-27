import type { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
}

export default function Text({ children, color, fontFamily, fontSize, textAlign }: TextProps) {
    return (
        <p
            style={{
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
