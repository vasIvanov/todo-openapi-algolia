"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProtectedService {
    /**
     * Protected Route - Requires JWT Token
     * @returns any Success: Authorized to access this route
     * @throws ApiError
     */
    static getWelcome() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/welcome',
            errors: {
                401: `Unauthorized: Missing or invalid token`,
            },
        });
    }
}
exports.ProtectedService = ProtectedService;
