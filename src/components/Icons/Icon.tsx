import { BoxItem, type BoxItemType } from '../BoxItem';
import { icons } from './icons';

export interface IconProps extends BoxItemType {
    iconName?: keyof typeof icons;
    width?: number;
}

export default function Icon({ iconName, width, ...BoxItemProps }: IconProps) {
    const IconComponent = iconName ? icons[iconName] : null;

    return (
        <BoxItem {...BoxItemProps}>
            <div
                style={{
                    width,
                    placeContent: 'center',
                }}
            >
                {IconComponent ? <IconComponent /> : null}
            </div>
        </BoxItem>
    );
}
