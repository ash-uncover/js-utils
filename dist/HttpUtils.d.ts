export type HttpHeader = 'Access-Control-Allow-Origin' | 'Access-Control-Allow-Headers' | 'Access-Control-Allow-Methods';
export declare const HttpHeaders: {
    ACCESS_CONTROL_ALLOW_ORIGIN: HttpHeader;
    ACCESS_CONTROL_ALLOW_HEADERS: HttpHeader;
    ACCESS_CONTROL_ALLOW_METHODS: HttpHeader;
};
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
export declare const HttpMethods: {
    GET: HttpMethod;
    POST: HttpMethod;
    PUT: HttpMethod;
    PATCH: HttpMethod;
    DELETE: HttpMethod;
    OPTIONS: HttpMethod;
};
export type HttpStatus = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500;
export declare const HttpStatuses: {
    OK: HttpStatus;
    CREATED: HttpStatus;
    REMOVED: HttpStatus;
    BAD_REQUEST: HttpStatus;
    UNAUTHORIZED: HttpStatus;
    FORBIDDEN: HttpStatus;
    NOT_FOUND: HttpStatus;
    ERROR: HttpStatus;
};
