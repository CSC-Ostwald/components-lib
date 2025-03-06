import type { Config } from '@measured/puck';

export default {
    render: ({ children, styles }) => (
        <div>
            <style>{styles}</style>
            {children}
        </div>
    ),
} satisfies Config['root'];
