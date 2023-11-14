"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TodosService {
    /**
     * Delete a todo by ID
     * Deletes a todo from the JSONPlaceholder API by its unique ID.
     * @param todoId The ID of the todo to delete.
     * @returns any Delete todo successful.
     * @throws ApiError
     */
    static deleteTodo(todoId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/todos/{todoId}',
            path: {
                'todoId': todoId,
            },
            errors: {
                404: `Todo not found`,
            },
        });
    }
    /**
     * Get all todos
     * @returns Todo Get todos
     * @throws ApiError
     */
    static getTodos() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/todos/',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
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
exports.TodosService = TodosService;
