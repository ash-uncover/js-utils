export type HttpHeader =
  | 'Access-Control-Allow-Origin'
  | 'Access-Control-Allow-Headers'
  | 'Access-Control-Allow-Methods'

export const HttpHeaders: {
  ACCESS_CONTROL_ALLOW_ORIGIN: HttpHeader
  ACCESS_CONTROL_ALLOW_HEADERS: HttpHeader
  ACCESS_CONTROL_ALLOW_METHODS: HttpHeader
} = {
  ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',
  ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers',
  ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods'
}

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'

export const HttpMethods: {
  GET: HttpMethod
  POST: HttpMethod
  PUT: HttpMethod
  PATCH: HttpMethod
  DELETE: HttpMethod
  OPTIONS: HttpMethod
} = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS'
}

export type HttpStatus =
  | 200
  | 201
  | 204
  | 400
  | 401
  | 403
  | 404
  | 500

export const HttpStatuses: {
  OK: HttpStatus
  CREATED: HttpStatus
  REMOVED: HttpStatus
  BAD_REQUEST: HttpStatus
  UNAUTHORIZED: HttpStatus
  FORBIDDEN: HttpStatus
  NOT_FOUND: HttpStatus
  ERROR: HttpStatus
} = {
  OK: 200,
  CREATED: 201,
  REMOVED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  ERROR: 500
}
