import { BoxItem, type BoxItemType } from '../BoxItem';
import { icons } from './icons';
import type { PropsWithChildren } from 'react';

export interface BaseIconProps extends PropsWithChildren, BoxItemType {
    iconName?: keyof typeof icons;
    minWidth?: number;
    minHeight?: number;
}

export default function BaseIcon({ children, minWidth, minHeight, ...BoxItemProps }: BaseIconProps) {
    return (
        <BoxItem {...BoxItemProps}>
            <div
                style={{
                    minWidth,
                    minHeight,
                }}
            >
                {children}
            </div>
        </BoxItem>
    );
}
