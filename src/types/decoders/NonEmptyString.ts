import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"

export interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol
}
export type NonEmptyString = string & NonEmptyStringBrand

export const NonEmptyString = pipe(
  D.string,
  D.refine((s): s is NonEmptyString => s.length > 0, 'NonEmptyString')
)
