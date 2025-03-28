export declare class DateUtils {
    static TimeConstants: {
        MIL_PER_SEC: number;
        SEC_PER_MIN: number;
        MIL_PER_MIN: number;
        MIN_PER_HOU: number;
        SEC_PER_HOU: number;
        MIL_PER_HOU: number;
        HOU_PER_DAY: number;
        MIN_PER_DAY: number;
        SEC_PER_DAY: number;
        MIL_PER_DAY: number;
    };
    static durationToHumanTime(duration: number): {
        millis: number;
        seconds: number;
        minutes: number;
        hours: number;
    };
    static normalizeTime(value: number): string;
    static dateString(date: Date): string;
    static nowString(): string;
}
