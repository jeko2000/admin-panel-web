import { NetworkError } from "@/types/errors";
import { TaskEither, tryCatch } from "fp-ts/TaskEither";

export interface HttpClient {
  get(url: string): TaskEither<NetworkError, Response>;
}

export class FetchHttpClient implements HttpClient {
  get(url: string): TaskEither<NetworkError, Response> {
    return tryCatch(
      () => fetch(url),
      e => new NetworkError(`${e}`)
    );
  }
}

const httpClient: HttpClient = new FetchHttpClient();
export default httpClient;
