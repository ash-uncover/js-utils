const MIL_PER_SEC = 1000

const SEC_PER_MIN = 60
const MIL_PER_MIN = MIL_PER_SEC * SEC_PER_MIN

const MIN_PER_HOU = 60
const SEC_PER_HOU = SEC_PER_MIN * MIN_PER_HOU
const MIL_PER_HOU = MIL_PER_MIN * MIN_PER_HOU

const HOU_PER_DAY = 24
const MIN_PER_DAY = MIN_PER_HOU * HOU_PER_DAY
const SEC_PER_DAY = SEC_PER_HOU * HOU_PER_DAY
const MIL_PER_DAY = MIL_PER_HOU * HOU_PER_DAY

export class DateUtils {
  static TimeConstants = {
    MIL_PER_SEC,
    SEC_PER_MIN,
    MIL_PER_MIN,
    MIN_PER_HOU,
    SEC_PER_HOU,
    MIL_PER_HOU,
    HOU_PER_DAY,
    MIN_PER_DAY,
    SEC_PER_DAY,
    MIL_PER_DAY
  }

  static durationToHumanTime(duration: number) {
    return {
      millis: duration % MIL_PER_SEC,
      seconds: Math.floor(duration / MIL_PER_SEC) % SEC_PER_MIN,
      minutes: Math.floor(duration / MIL_PER_MIN) % MIN_PER_HOU,
      hours: Math.floor(duration / MIL_PER_HOU)
    }
  }

  static normalizeTime(value: number) {
    return `${value}`.padStart(2, '0')
  }

  static dateString(date: Date) {
    const year = DateUtils.normalizeTime(date.getFullYear())
    const month = DateUtils.normalizeTime(date.getMonth())
    const day = DateUtils.normalizeTime(date.getDate())
    const hours = DateUtils.normalizeTime(date.getHours())
    const minutes = DateUtils.normalizeTime(date.getMinutes())
    const seconds = DateUtils.normalizeTime(date.getSeconds())
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  static nowString() {
    return DateUtils.dateString(new Date(Date.now()))
  }
}
