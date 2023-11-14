"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class AuthenticationService {
    /**
     * Logout use and clear the token
     * @returns any Success: Authorized to access this route
     * @throws ApiError
     */
    static postLogout() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/logout',
            errors: {
                401: `Unauthorized: Missing or invalid token`,
            },
        });
    }
    /**
     * Login user
     * @param requestBody
     * @returns any User successfully logged in
     * @throws ApiError
     */
    static postAuthLogin(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request: Invalid input`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Register a new user
     * @param requestBody
     * @returns User User successfully registered
     * @throws ApiError
     */
    static postAuthRegister(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request: Invalid input`,
                500: `Internal Server Error`,
            },
        });
    }
}
exports.AuthenticationService = AuthenticationService;
