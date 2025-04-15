import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface TextProps extends PropsWithChildren, BoxItemType {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
}

export default function Text({ children, color, fontFamily, fontSize, textAlign, ...boxItemProps }: TextProps) {
    return (
        <BoxItem {...boxItemProps}>
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
        </BoxItem>
    );
}
