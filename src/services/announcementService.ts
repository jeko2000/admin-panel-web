import { Announcement } from "@/types/models";
import { Option } from "fp-ts/lib/Option";
import { ServerError } from "@/types/errors";
import { chain, chainEitherK, TaskEither } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/function";
import httpClient, { HttpClient } from "./httpClient";
import { decodeArrayInResponseKey, decodeResponseToOptionOf, ensureHttpStatus } from "@/util/httpUtil";

export interface AnnouncementService {
  getAll(): TaskEither<Error, Announcement[]>
  getById(announcementId: string): TaskEither<Error, Option<Announcement>>;
}

export class DefaultAnnouncementService implements AnnouncementService {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string = 'http://localhost:3000/api/v1'
  ) { }

  getAll(): TaskEither<Error, Announcement[]> {
    return pipe(
      this.httpClient.get(this.baseUrl + '/announcements'),
      chainEitherK(ensureHttpStatus(200)),
      chain(decodeArrayInResponseKey(Announcement, "announcements"))
    )
  }
  getById(announcementId: string): TaskEither<ServerError, Option<Announcement>> {
    return pipe(
      this.httpClient.get(`{this.baseUrl}/announcements/${announcementId}`),
      chain(decodeResponseToOptionOf(Announcement))
    )
  }
}

const announcementService: AnnouncementService = new DefaultAnnouncementService(httpClient);
export default announcementService;
