import * as D from 'io-ts/Decoder'
import { pipe } from "fp-ts/lib/function"
import validator from 'validator';

export interface EmailAddressBrand {
  readonly EmailAddress: unique symbol
}
export type EmailAddress = string& EmailAddressBrand

export const EmailAddress = pipe(
  D.string,
  D.refine((s): s is EmailAddress => validator.isEmail(s), 'EmailAddress')
)
