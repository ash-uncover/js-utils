export declare class ArrayUtils {
    static createIntArray(size?: number): number[];
    static shuffle<T>(array?: T[]): T[];
    static randomSubArray<T>(array?: T[], items?: number): T[];
    static randomElement<T>(array?: T[]): T | null;
    static removeElement<T>(array: T[], element: any): T[];
}
