export class ServerError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class ServerResponseError extends ServerError {
  readonly response: Response
  constructor(message: string, response: Response) {
    super(message);
    this.response = response;
  }
}

export class NetworkError extends ServerError {}

export class DecodeError extends ServerError {}
