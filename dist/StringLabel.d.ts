export declare class StringLabel {
    private _value;
    private _words;
    constructor(value: string, separator?: string);
    get words(): string[];
    get camel(): string;
    get pascal(): string;
    get worm(): string;
    get snake(): string;
    get serpent(): string;
}
