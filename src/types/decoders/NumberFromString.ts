import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const NumberFromString = pipe(
  D.string,
  D.parse((s) => {
    const n = +s
    return isNaN(n) || s.trim() === '' ? D.failure(s, 'NumberFromString') : D.success(n)
  })
)
