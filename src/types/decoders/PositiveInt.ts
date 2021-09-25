import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"
import { PositiveNumber } from './PositiveNumber'
import { Int } from './Int'

export const PositiveInt = pipe(
  Int,
  D.intersect(PositiveNumber)
)
export type PositiveInt = D.TypeOf<typeof PositiveInt>
