import * as D from 'io-ts/Decoder';

export interface IntegerBrand {
  readonly Integer: unique symbol
}
export type Integer = number & IntegerBrand

export const Integer = pipe(
  D.number,
  D.refine((n): n is Integer => Number.isInteger(n), 'Integer')
)
