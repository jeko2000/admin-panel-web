import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const DateFromUnixTime = pipe(
  D.number,
  D.parse((n) => {
    const d = new Date(n * 1000)
    return isNaN(d.getTime()) ? D.failure(n, 'DateFromUnixTime') : D.success(d)
  })
)
