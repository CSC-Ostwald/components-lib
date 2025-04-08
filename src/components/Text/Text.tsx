import type { PropsWithChildren } from 'react';
import { ChildrenTemplateType } from '../../utilities/ChildrenTemplate';

export interface TextProps extends PropsWithChildren, ChildrenTemplateType {
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
