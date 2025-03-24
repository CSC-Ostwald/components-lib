import type { PropsWithChildren } from "react";

export interface TextProps extends PropsWithChildren {
    color?: string;
    fontFamily?: string;
}

export default function Text({ children, color = 'black', fontFamily = 'Roboto' }: TextProps) {
    return (
        <p style={{ color, fontFamily: fontFamily || 'Roboto'}}>
            {children}
        </p>
    )
}