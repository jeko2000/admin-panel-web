import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export interface PositiveNumberBrand {
  readonly PositiveNumber: unique symbol
}
export type PositiveNumber = number & PositiveNumberBrand

export const PositiveNumber = pipe(
  D.number,
  D.refine((n): n is PositiveNumber => n > 0, 'PositiveNumber')
)
