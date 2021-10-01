import { TypeOf, union, withMessage } from "io-ts/lib/Decoder";
import { date, DateFromISOString, DateFromNumber } from "@/types/decoders";

export const Timestamp = withMessage(
  (input: unknown) => `Unable to decode Timestamp from ${input}`
)(union(date, DateFromNumber, DateFromISOString))

export type Timestamp = TypeOf<typeof Timestamp>;
