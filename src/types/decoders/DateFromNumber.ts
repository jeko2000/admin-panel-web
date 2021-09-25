import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const DateFromNumber = pipe(
  D.number,
  D.parse((n) => {
    const d = new Date(n)
    return isNaN(d.getTime()) ? D.failure(n, 'DateFromNumber') : D.success(d)
  })
)
