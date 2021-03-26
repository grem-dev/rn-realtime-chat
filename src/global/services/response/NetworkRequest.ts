
type TypeAssertion<T> = T extends null | undefined ? undefined : string;

function ComposedResponse<T>(code: number, value: T) {
  return {
    code,
    value,
  }
}

function Unauthorized() {
  return ComposedResponse(401, null);
}

function Forbidden() {
  return ComposedResponse(403, null);
}

function Created() {
  return ComposedResponse(201, null);
}

function Ok<T>(data: T) {
  return ComposedResponse(200, data);
}

function GetSuccess<T>(data: T) {
  return ComposedResponse(200, data);
}

function BadRequest(errors: string[]) {
  return ComposedResponse(400, errors);
}

function NotFound() {
  return ComposedResponse(404, null);
}

function ServerError() {
  return ComposedResponse(500, null);
}

export {
  GetSuccess,
  Ok,
  Unauthorized,
  NotFound,
  BadRequest,
  ServerError,
  Created,
}