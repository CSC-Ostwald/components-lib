import { useState } from 'react';

export default function FontSizeField({ value, onChange }: { value: number, onChange: (v: number) => void }) {
    const [internalValue, setInternalValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);
        onChange(newValue);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
                type="range"
                min="8"
                max="72"
                step="2"
                value={internalValue}
                onChange={handleChange}
            />
            <span>{internalValue}px</span>
        </div>
    );
}
