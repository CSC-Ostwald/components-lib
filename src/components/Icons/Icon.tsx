import { BoxItem, type BoxItemType } from '../BoxItem';
import { icons } from './icons';
import type { PropsWithChildren } from 'react';

export interface IconProps extends PropsWithChildren, BoxItemType {
    iconName?: keyof typeof icons;
    minWidth?: number;
    minHeight?: number;
}

export default function Icon({ children, iconName, minWidth, minHeight, ...BoxItemProps }: IconProps) {
    const IconComponent = iconName ? icons[iconName] : null;

    return (
        <BoxItem {...BoxItemProps}>
            <div
                style={{
                    minWidth,
                    minHeight,
                }}
            >
                {IconComponent ? <IconComponent /> : null}
            </div>
        </BoxItem>
    );
}
