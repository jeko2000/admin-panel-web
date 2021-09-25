import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export const BooleanFromNumber = pipe(
  D.number,
  D.parse((n) => D.success(n !== 0))
)
