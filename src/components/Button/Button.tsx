import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface ButtonProps extends PropsWithChildren, BoxItemType {
    url?: string;
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    fontFamily?: string;
    fontSize?: number;
    margin?: number;
    padding?: number;
    borderRadius?: number;
}

export function Button({
    children,
    url,
    color,
    backgroundColor,
    backgroundImage,
    fontFamily,
    fontSize,
    margin,
    padding,
    borderRadius,
    ...boxItemProps
}: ButtonProps) {
    return (
        <BoxItem {...boxItemProps}>
            <a
                href={url}
                style={{
                    color,
                    backgroundColor,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: '100% 100%',
                    fontFamily,
                    fontSize,
                    margin,
                    padding,
                    borderRadius,
                    textDecoration: 'none',
                }}
            >
                {children}
            </a>
        </BoxItem>
    );
}
