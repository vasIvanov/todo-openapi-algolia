"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const healthController_1 = require("../controllers/healthController");
const healthRouter = (0, express_promise_router_1.default)();
healthRouter.get("/", healthController_1.checkHealth);
exports.default = healthRouter;
