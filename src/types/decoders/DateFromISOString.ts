import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const DateFromISOString = pipe(
  D.string,
  D.parse((s) => {
    const d = new Date(s)
    return isNaN(d.getTime()) ? D.failure(s, 'DateFromISOString') : D.success(d)
  })
)
