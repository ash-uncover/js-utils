"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatuses = exports.HttpMethods = exports.HttpHeaders = void 0;
exports.HttpHeaders = {
    ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',
    ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers',
    ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods'
};
exports.HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
    OPTIONS: 'OPTIONS'
};
exports.HttpStatuses = {
    OK: 200,
    CREATED: 201,
    REMOVED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    ERROR: 500
};
