import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface TextProps extends PropsWithChildren, BoxItemType {
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    margin?: number;
    padding?: number;
}

export function Text({
    children,
    color,
    backgroundColor,
    backgroundImage,
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
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: '100% 100%',
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
