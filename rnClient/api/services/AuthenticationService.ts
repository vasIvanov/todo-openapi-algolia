/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     * Logout use and clear the token
     * @returns any Success: Authorized to access this route
     * @throws ApiError
     */
    public static postLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static postAuthLogin(
        requestBody: {
            username?: string;
            password?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static postAuthRegister(
        requestBody: {
            username?: string;
            password?: string;
        },
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
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
