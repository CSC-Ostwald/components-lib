import React from 'react';

export interface RangeFieldProps {
    baseValue: number;
    onChange: (value: number) => void;
    minValue?: number;
    maxValue?: number;
    step?: number;
    label?: string;
}

export function RangeField({ baseValue, onChange, minValue, maxValue, step, label }: RangeFieldProps) {
    const [internalValue, setInternalValue] = React.useState(baseValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);
        onChange(newValue);
    };

    return (
        <>
            <label>{label || ''}</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="range"
                    min={minValue || 0}
                    max={maxValue || 100}
                    step={step || 1}
                    defaultValue={internalValue}
                    onChange={handleChange}
                />
                <span>{internalValue}px</span>
            </div>
        </>
    );
}
