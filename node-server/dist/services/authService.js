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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const User_1 = require("../models/User");
const utils_1 = require("./utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const authService = () => {
    const register = ({ password, username }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!username || !password) {
            throw {
                status: 400,
                message: "Missing username or password",
            };
        }
        const oldUser = yield User_1.Schema.findOne({ username });
        if (oldUser) {
            throw {
                status: 409,
                message: "User already exists",
            };
        }
        try {
            //Encrypt user password
            const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
            // Create user in our database
            const user = yield User_1.Schema.create({
                username,
                password: encryptedPassword,
            });
            // Create token
            const token = jsonwebtoken_1.default.sign({ id: user._id, username }, (_a = process.env.TOKEN_KEY) !== null && _a !== void 0 ? _a : "", {
                expiresIn: "2h",
            });
            // save user token
            user.token = token;
            return user;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    const login = ({ password, username }) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        if (!username || !password) {
            throw {
                status: 400,
                message: "Missing username or password",
            };
        }
        const user = yield User_1.Schema.findOne({ username });
        try {
            if (user &&
                user.password &&
                (yield bcrypt_1.default.compare(password, user.password))) {
                // Create token
                const token = jsonwebtoken_1.default.sign({ id: user._id, username }, (_b = process.env.TOKEN_KEY) !== null && _b !== void 0 ? _b : "", {
                    expiresIn: "2h",
                });
                // save user token
                user.token = token;
                return user;
            }
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
        throw {
            status: 400,
            message: "Invalid Credentials",
        };
    });
    return { register, login };
};
exports.authService = authService;
