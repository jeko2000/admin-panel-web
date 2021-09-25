import * as TE from 'fp-ts/TaskEither'
import * as D from 'io-ts/Decoder'
import { DecodeError, ServerError, ServerResponseError } from "@/types/errors";
import { Either, left, right } from "fp-ts/Either";
import { none, Option, some } from "fp-ts/Option";
import { decodeTo } from './fpUtil';
import { pipe } from 'fp-ts/function';

export function ensureHttpStatus(status: number): (response: Response) => Either<ServerError, Response> {
  return (response: Response) => response.status === status
    ? right(response) :
    left(new ServerResponseError(`Expected ${status} and got ${response.status}`, response))
}

export function decodeResponseTo<I,A>(decoder: D.Decoder<I, A>): (response: Response) => TE.TaskEither<DecodeError, A> {
  return (response: Response) => pipe(
    TE.tryCatch(
      () => response.json(),
      () => new DecodeError(`Unable to decode text from response`)
    ),
    TE.chainEitherK(decodeTo(decoder))
  )
}

export function decodeArrayInResponseKey<A>(decoder: D.Decoder<unknown, A>, key: string): (response: Response) => TE.TaskEither<DecodeError, A[]> {
  return (response: Response) => pipe(
    TE.tryCatch(
      () => response.json(),
      () => new DecodeError(`Unable to decode Json from response`)
    ),
    TE.map(a => a[key]),
    TE.chainEitherK(decodeTo(D.array(decoder)))
  )
}

export function decodeResponseToOptionOf<A>(decoder: D.Decoder<unknown, A>): (response: Response) => TE.TaskEither<DecodeError, Option<A>> {
  return (response: Response) => {
    if (response.status === 404) {
      return TE.right(none)
    }
    return pipe(
      decodeResponseTo(decoder)(response),
      TE.map(some)
    )
  }
}
