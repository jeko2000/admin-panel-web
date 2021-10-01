import { struct, TypeOf } from "io-ts/lib/Decoder";
import { EmailAddress, NonEmptyString } from "@/types/decoders";

export const UserRegistrationRendition = struct({
  firstName: NonEmptyString,
  lastName: NonEmptyString,
  email: EmailAddress,
  password: NonEmptyString
})

export type UserRegistrationRendition = TypeOf<typeof UserRegistrationRendition>;
