import type { PropsWithChildren } from 'react';
import type { ChildrenTemplateType } from '../../utilities/ChildrenTemplate';

export interface TestItemProps extends PropsWithChildren, ChildrenTemplateType {
    minWidth?: number;
    minHeight?: number;
}

export default function TestItem({
    children,
    ref,
    columns,
    rows,
    flexShrink,
    flexBasis,
    flexGrow,
    minHeight,
    minWidth,
}: TestItemProps) {
    return (
        <div
            ref={ref}
            style={{
                gridColumn: `span ${columns}`,
                gridRow: `span ${rows}`,
                flexGrow,
                flexShrink,
                flexBasis,
                backgroundColor: '#F0F',
                border: '3px solid #000',
                minWidth,
                minHeight,
            }}
        >
            {children}
        </div>
    );
}
