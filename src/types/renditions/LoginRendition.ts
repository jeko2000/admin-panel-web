import { struct, TypeOf } from "io-ts/lib/Decoder";
import { EmailAddress, NonEmptyString } from "@/types/decoders";

export const LoginRendition = struct({
  email: EmailAddress,
  password: NonEmptyString
})

export type LoginRendition = TypeOf<typeof LoginRendition>;
