/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProtectedService {

    /**
     * Protected Route - Requires JWT Token
     * @returns any Success: Authorized to access this route
     * @throws ApiError
     */
    public static getWelcome(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/welcome',
            errors: {
                401: `Unauthorized: Missing or invalid token`,
            },
        });
    }

}
