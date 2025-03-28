export declare class ObjectUtils {
    static nil(object?: any): boolean;
    static getProperty(object: object, path: string): any;
    static clone(object: object): any;
    static arrayfy<T>(object: T | T[]): T[];
}
