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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const openapi_json_1 = __importDefault(require("./openapi.json"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./middleware/auth"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapi_json_1.default));
    app.use(body_parser_1.default.json());
    app.use((0, cookie_parser_1.default)());
    // app.get("/get-cookie", (req, res) => {
    //   const cookieValue = req.cookies.token; // Access the value of the cookie
    //   console.log(cookieValue);
    //   res.send(`Value of cookie: ${cookieValue}`);
    // });
    //Protected route
    app.get("/welcome", auth_1.default, (req, res) => {
        res.status(200).send("Welcome 🙌 ");
    });
    //Clear token in cookie
    app.post("/logout", auth_1.default, (req, res) => {
        res.clearCookie("token");
        res.status(200).send("Cookie cleared");
    });
    (0, routes_1.default)(app);
    try {
        yield mongoose_1.default.connect((_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : "");
        console.log("DB connected");
    }
    catch (error) {
        console.log("DB connection error: ", error.message);
    }
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}))();
