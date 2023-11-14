"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesService = exports.TodosService = exports.ProtectedService = exports.HealthService = exports.AuthenticationService = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
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
var AuthenticationService_1 = require("./services/AuthenticationService");
Object.defineProperty(exports, "AuthenticationService", { enumerable: true, get: function () { return AuthenticationService_1.AuthenticationService; } });
var HealthService_1 = require("./services/HealthService");
Object.defineProperty(exports, "HealthService", { enumerable: true, get: function () { return HealthService_1.HealthService; } });
var ProtectedService_1 = require("./services/ProtectedService");
Object.defineProperty(exports, "ProtectedService", { enumerable: true, get: function () { return ProtectedService_1.ProtectedService; } });
var TodosService_1 = require("./services/TodosService");
Object.defineProperty(exports, "TodosService", { enumerable: true, get: function () { return TodosService_1.TodosService; } });
var WorkspacesService_1 = require("./services/WorkspacesService");
Object.defineProperty(exports, "WorkspacesService", { enumerable: true, get: function () { return WorkspacesService_1.WorkspacesService; } });
