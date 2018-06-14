// @declaration: true
// @keyofStringsOnly: true
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type PartialProperties<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
export function doSomething_Actual<T extends {
    prop: string;
}>(a: T) {
    const x: { [P in keyof PartialProperties<T, "prop">]: PartialProperties<T, "prop">[P]; } = null as any;
    return x;
}
export declare function doSomething_Expected<T extends {
    prop: string;
}>(a: T): { [P in keyof PartialProperties<T, "prop">]: PartialProperties<T, "prop">[P]; };

export let a = doSomething_Actual({ prop: "test" });
a = {} // should be fine, equivalent to below

export let b = doSomething_Expected({ prop: "test" });
b = {} // fine
