import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface TextProps extends PropsWithChildren, BoxItemType {
    color?: string;
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    margin?: number;
    padding?: number;
}

export default function Text({
    children,
    color,
    backgroundColor,
    fontFamily,
    fontSize,
    textAlign,
    margin,
    padding,
    ...boxItemProps
}: TextProps) {
    return (
        <BoxItem {...boxItemProps}>
            <p
                style={{
                    color,
                    backgroundColor,
                    fontFamily,
                    fontSize,
                    textAlign,
                    margin,
                    padding,
                }}
            >
                {children}
            </p>
        </BoxItem>
    );
}
