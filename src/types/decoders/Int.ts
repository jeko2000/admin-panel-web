import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export interface IntBrand {
  readonly Int: unique symbol
}
export type Int = number & IntBrand

export const Int = pipe(
  D.number,
  D.refine((n): n is Int => Number.isInteger(n), 'Int')
)
