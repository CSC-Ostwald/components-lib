import React from 'react';

export default function FontSizeField({ value, onChange }: { value: number; onChange: (v: number) => void }) {
    const [internalValue, setInternalValue] = React.useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);
        onChange(newValue);
    };

    return (
        <>
            <label>Font size</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="range"
                    min="8"
                    max="72"
                    step="2"
                    defaultValue="16"
                    value={internalValue}
                    onChange={handleChange}
                />
                <span>{internalValue}px</span>
            </div>
        </>
    );
}
