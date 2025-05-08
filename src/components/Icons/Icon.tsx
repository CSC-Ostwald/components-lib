import { BoxItem, type BoxItemType } from '../BoxItem';
import { icons } from './icons';

export interface IconProps extends BoxItemType {
    url?: string;
    iconName?: keyof typeof icons;
    width?: number;
}

export default function Icon({ iconName, width, url, ...BoxItemProps }: IconProps) {
    const IconComponent = iconName ? icons[iconName] : null;

    const onClick = () => {
        window.location.href = url || '';
    };

    return (
        <BoxItem {...BoxItemProps}>
            <div
                onClick={onClick}
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
