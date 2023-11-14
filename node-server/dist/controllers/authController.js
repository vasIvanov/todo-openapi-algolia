"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const authService_1 = require("../services/authService");
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const authServices = (0, authService_1.authService)();
            const response = yield authServices.register(data);
            res.cookie("token", response === null || response === void 0 ? void 0 : response.token, { httpOnly: true });
            res.status(200).send({ username: response === null || response === void 0 ? void 0 : response.username, _id: response === null || response === void 0 ? void 0 : response._id });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.registerUser = registerUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const authServices = (0, authService_1.authService)();
            const response = yield authServices.login(data);
            console.log(response.token);
            res
                .cookie("token", response === null || response === void 0 ? void 0 : response.token, { httpOnly: true })
                .status(200)
                .send({ username: response === null || response === void 0 ? void 0 : response.username, _id: response === null || response === void 0 ? void 0 : response._id });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.loginUser = loginUser;
