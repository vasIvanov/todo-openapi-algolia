"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServiceError = void 0;
function createServiceError(e) {
    const serviceError = {
        status: e instanceof Error && "statusCode" in e ? Number(e.statusCode) : 500,
        name: "Internal Server Error",
        message: typeof e === "string" ? e : String(e),
    };
    throw serviceError;
}
exports.createServiceError = createServiceError;
