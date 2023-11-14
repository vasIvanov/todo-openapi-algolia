"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = exports.HealthService = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var HealthService_1 = require("./services/HealthService");
Object.defineProperty(exports, "HealthService", { enumerable: true, get: function () { return HealthService_1.HealthService; } });
var TodosService_1 = require("./services/TodosService");
Object.defineProperty(exports, "TodosService", { enumerable: true, get: function () { return TodosService_1.TodosService; } });
