import { DecodeError } from '@/types/errors';
import { Either, fold, mapLeft } from 'fp-ts/Either';
import { flow } from 'fp-ts/function';
import { map } from 'fp-ts/lib/Task';
import * as D from 'io-ts/Decoder';

export function toDecodeError(error: D.DecodeError): DecodeError {
  const msg = D.draw(error)
  return new DecodeError(msg);
}

export function decodeTo<I, A>(decoder: D.Decoder<I, A>): (i: I) => Either <DecodeError, A> {
  return flow(decoder.decode, mapLeft(toDecodeError))
}

export const fold$ = flow(
  fold,
  map
)
