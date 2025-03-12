import type { PropsWithChildren } from "react";

export default function Text({ children }: PropsWithChildren) {
    return (
        <p style={{ color: 'red' }}>
            {children}
        </p>
    )
}