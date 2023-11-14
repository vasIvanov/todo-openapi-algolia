/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Health } from '../models/Health';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * health
     * @returns Health health
     * @throws ApiError
     */
    public static health(): CancelablePromise<Health> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health/',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

}
