import type { PropsWithChildren } from 'react';
import { BoxItem, type BoxItemType } from '../BoxItem';

export interface TestItemProps extends PropsWithChildren, BoxItemType {
    minWidth?: number;
    minHeight?: number;
    margin?: number;
}

export default function TestItem({ children, minHeight, minWidth, margin, ...boxItemProps }: TestItemProps) {
    return (
        <BoxItem {...boxItemProps}>
            <div
                style={{
                    backgroundColor: '#F0F',
                    border: '3px solid #000',
                    minWidth,
                    minHeight,
                    margin,
                }}
            >
                {children}
            </div>
        </BoxItem>
    );
}
