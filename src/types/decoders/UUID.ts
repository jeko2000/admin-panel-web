import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"
import validator from 'validator';

export interface UUIDBrand {
  readonly UUID: unique symbol
}
export type UUID = string& UUIDBrand

export const UUID = pipe(
  D.string,
  D.refine((s): s is UUID => validator.isUUID(s), 'UUID')
)
