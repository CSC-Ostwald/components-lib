import type { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
}

export default function Text({ children, color = 'black', fontFamily = 'Roboto', fontSize }: TextProps) {
    return (
        <p
            style={{
                color,
                fontFamily,
                fontSize,
            }}
        >
            {children}
        </p>
    );
}
