import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const BooleanFromString = pipe(
  D.string,
  D.parse((s) => {
    if (s === 'true') {
      return D.success(true)
    }
    if (s === 'false') {
      return D.success(false)
    }
    return D.failure(s, 'BooleanFromString')
  })
)
