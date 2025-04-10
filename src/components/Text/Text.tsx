import type { PropsWithChildren } from 'react';
import { BoxItemType } from '../../utilities/BoxItem';

export interface TextProps extends PropsWithChildren, BoxItemType {
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
                gridColumn: columns,
                gridRow: rows,
                flexGrow,
                flexShrink,
                flexBasis,
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
