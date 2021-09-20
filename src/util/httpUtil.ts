import * as TE from 'fp-ts/TaskEither'
import * as t from 'io-ts'
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

export function decodeResponseTo<A,O>(type: t.Type<A, O>): (response: Response) => TE.TaskEither<DecodeError, A> {
  return (response: Response) => pipe(
    TE.tryCatch(
      () => response.json(),
      () => new DecodeError(`Unable to decode text from response`)
    ),
    TE.chainEitherK(decodeTo(type))
  )
}

export function decodeArrayInResponseKey<A, O>(type: t.Type<A, O>, key: string): (response: Response) => TE.TaskEither<DecodeError, A[]> {
  return (response: Response) => pipe(
    TE.tryCatch(
      () => response.json(),
      () => new DecodeError(`Unable to decode Json from response`)
    ),
    TE.map(a => a[key]),
    TE.chainEitherK(decodeTo(t.array(type)))
  )
}

export function decodeResponseToOptionOf<A, O>(type: t.Type<A, O>): (response: Response) => TE.TaskEither<DecodeError, Option<A>> {
  return (response: Response) => {
    if (response.status === 404) {
      return TE.right(none)
    }
    return pipe(
      decodeResponseTo(type)(response),
      TE.map(some)
    )
  }
}
