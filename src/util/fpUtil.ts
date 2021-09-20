import { DecodeError } from '@/types/errors';
import { Either, mapLeft } from 'fp-ts/Either';
import { flow } from 'fp-ts/function';
import * as t from 'io-ts'

export function toDecodeError(errors: t.Errors): DecodeError {
  const msg = errors.map(error => error.message).join(',')
  return new DecodeError(msg);
}

export function decodeTo<A,O,I>(type: t.Type<A, O, I>): (i: I) => Either<DecodeError, A> {
  return flow(type.decode, mapLeft(toDecodeError))
}
