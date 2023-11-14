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
exports.todoService = void 0;
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const Todo_1 = require("../models/Todo");
const utils_1 = require("./utils");
const todoService = () => {
    const getTodos = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield Todo_1.Schema.find();
            return result;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    const createTodo = (data) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        console.log(data);
        const searchClient = (0, algoliasearch_1.default)((_a = process.env.AlgoliaApplicationID) !== null && _a !== void 0 ? _a : "", (_b = process.env.AlgoliaSearchOnlyAPIKey) !== null && _b !== void 0 ? _b : "");
        const index = searchClient.initIndex("dev_test");
        // const res = await index.saveObject(data);
        // console.log(res);
        try {
            const todo = new Todo_1.Schema(data);
            const result = yield todo.save();
            yield index.saveObject(Object.assign(Object.assign({}, data), { objectID: result._id }));
            return result;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () { });
    return { getTodos, createTodo, deleteTodo };
};
exports.todoService = todoService;
