export declare class EncodeUtils {
    static encode(value?: string): string;
    static decode(value?: string): string;
    static encodeBasicHeader(username?: string, password?: string): string;
    static decodeBasicHeader(header?: string): {
        username: string;
        password: string;
    } | {
        username: null;
        password: null;
    };
}
