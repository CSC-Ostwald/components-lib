import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface ButtonProps extends PropsWithChildren, BoxItemType {
    href?: string;
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    fontFamily?: string;
    fontSize?: number;
    margin?: number;
    padding?: number;
    borderRadius?: number;
}

export default function Button({
    children,
    href,
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
                href={href}
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
