"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class HealthService {
    /**
     * health
     * @returns Health health
     * @throws ApiError
     */
    static health() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/health/',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
exports.HealthService = HealthService;
