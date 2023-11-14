/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Todo } from '../models/Todo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TodosService {

    /**
     * Delete a todo by ID
     * Deletes a todo from the JSONPlaceholder API by its unique ID.
     * @param todoId The ID of the todo to delete.
     * @returns any Delete todo successful.
     * @throws ApiError
     */
    public static deleteTodo(
        todoId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getTodos(): CancelablePromise<Todo> {
        return __request(OpenAPI, {
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
    public static createTodo(
        requestBody?: Todo,
    ): CancelablePromise<Todo> {
        return __request(OpenAPI, {
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
