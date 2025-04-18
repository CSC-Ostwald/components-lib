import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface ButtonProps extends PropsWithChildren, BoxItemType {
    href?: string;
    color?: string;
    backgroundColor?: string;
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
    fontFamily,
    fontSize,
    margin,
    padding,
    borderRadius,
    ...boxItemProps
}: ButtonProps) {
    return (
        <BoxItem {...boxItemProps}>
            <div style={{ display: 'flex' }}>
                <a
                    href={href}
                    style={{
                        color,
                        backgroundColor,
                        fontFamily,
                        fontSize,
                        margin,
                        padding,
                        borderRadius,
                        textDecoration: 'none',
                        placeContent: 'center',
                    }}
                >
                    {children}
                </a>
            </div>
        </BoxItem>
    );
}
