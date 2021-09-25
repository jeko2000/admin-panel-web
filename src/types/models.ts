import * as D from 'io-ts/Decoder'
import { date, DateFromISOString, DateFromNumber, NonEmptyString } from './decoders';

export const Timestamp = D.withMessage(
  (input: unknown) => `Unable to decode Timestamp from ${input}`
)(D.union(date, DateFromNumber, DateFromISOString))

export type Timestamp = D.TypeOf<typeof Timestamp>;

export const Announcement = D.struct({
  id: NonEmptyString,
  author: NonEmptyString,
  title: NonEmptyString,
  content: NonEmptyString,
  createdAt: Timestamp
})
export type Announcement = D.TypeOf<typeof Announcement>;
