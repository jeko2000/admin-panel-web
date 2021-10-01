import { struct, TypeOf } from 'io-ts/Decoder';
import { NonEmptyString } from '@/types/decoders';
import { Timestamp } from '.';

export const Announcement = struct({
  id: NonEmptyString,
  author: NonEmptyString,
  title: NonEmptyString,
  content: NonEmptyString,
  createdAt: Timestamp
})

export type Announcement = TypeOf<typeof Announcement>;
