"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonXL = exports.ButtonSM = exports.ButtonMD = exports.ButtonLG = exports.Input = void 0;
const components_1 = require("./components");
const service_1 = __importDefault(require("./service"));
const utils_1 = __importDefault(require("./utils"));
exports.default = { MiniWeb: components_1.MiniWeb, ResWeb: components_1.ResWeb, service: service_1.default, utils: utils_1.default };
var input_1 = require("./components/mini-web/form/input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return __importDefault(input_1).default; } });
var lg_1 = require("./components/mini-web/button/lg");
Object.defineProperty(exports, "ButtonLG", { enumerable: true, get: function () { return __importDefault(lg_1).default; } });
var md_1 = require("./components/mini-web/button/md");
Object.defineProperty(exports, "ButtonMD", { enumerable: true, get: function () { return __importDefault(md_1).default; } });
var sm_1 = require("./components/mini-web/button/sm");
Object.defineProperty(exports, "ButtonSM", { enumerable: true, get: function () { return __importDefault(sm_1).default; } });
var xl_1 = require("./components/mini-web/button/xl");
Object.defineProperty(exports, "ButtonXL", { enumerable: true, get: function () { return __importDefault(xl_1).default; } });
//# sourceMappingURL=index.js.map