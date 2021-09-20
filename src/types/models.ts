import * as t from 'io-ts';
import * as tt from 'io-ts-types';
import { withMessage } from 'io-ts-types/withMessage'

export const Timestamp = withMessage(
  t.union([tt.date, tt.DateFromNumber, tt.DateFromISOString], 'Timestamp'),
  input => `Unable to parse timestamp from: ${input}`
)
export type Timestamp = t.TypeOf<typeof Timestamp>;

export const Announcement = t.type({
  id: t.string,
  author: t.string,
  title: t.string,
  content: t.string,
  createdAt: Timestamp
})
export type Announcement = t.TypeOf<typeof Announcement>;
