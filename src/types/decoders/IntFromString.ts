import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const IntFromString = pipe(
  D.string,
  D.parse((s) => {
    const n = +s
    return isNaN(n) || s.trim() === '' || !Number.isInteger(n) ? D.failure(s, 'IntFromString') : D.success(n)
  })
)
