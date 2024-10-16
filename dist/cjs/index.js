"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Button = void 0;
const components_1 = require("./components");
const service_1 = __importDefault(require("./service"));
const utils_1 = __importDefault(require("./utils"));
exports.default = { MiniWeb: components_1.MiniWeb, ResWeb: components_1.ResWeb, service: service_1.default, utils: utils_1.default };
var button_1 = require("./components/mini-web/button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(button_1).default; } });
var input_1 = require("./components/mini-web/form/input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return __importDefault(input_1).default; } });
//# sourceMappingURL=index.js.map