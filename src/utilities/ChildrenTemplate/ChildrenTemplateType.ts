export type ChildrenTemplateType = {
    ref?: ((element: Element | null) => void) | null;
    columns?: number;
    rows?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
};
