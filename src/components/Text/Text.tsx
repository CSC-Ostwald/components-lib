import type { PropsWithChildren } from "react";

export interface TextProps extends PropsWithChildren {
    color?: string;
}

export default function Text({ children, color = 'black' }: TextProps) {
    return (
        <p style={{ color: color }}>
            {children}
        </p>
    )
}