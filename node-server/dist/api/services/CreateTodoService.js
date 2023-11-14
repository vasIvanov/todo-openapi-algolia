"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CreateTodoService {
    /**
     * Create new todo
     * @param requestBody
     * @returns Todo createTodo
     * @throws ApiError
     */
    static createTodo(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/todos/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
exports.CreateTodoService = CreateTodoService;
