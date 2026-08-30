const DELAY = 0

export class PromiseUtils {

  static delayedPromise<T>(promise: Promise<T>, timeout: number = DELAY): Promise<T> {
    return Promise.all([
      promise,
      new Promise<void>((resolve) => setTimeout(resolve, timeout))
    ])
      .then((result) => {
        return result[0]
      })
      .catch((error) => {
        throw error
      })
  }
}
