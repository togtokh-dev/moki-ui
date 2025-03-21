"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const react_1 = __importStar(require("react"));
function default_1({ isOn, handleToggle, activeColor, className, inactiveColor, }) {
    const [name] = (0, react_1.useState)(`${Math.floor(Math.random() * 600) + 1}`);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { checked: isOn, onChange: handleToggle, className: "react-togtokh-dev dev-switch-checkbox-xl absolute", id: `switch+${name}`, type: "checkbox" }),
        react_1.default.createElement("label", { style: isOn ? { background: activeColor } : { background: inactiveColor }, className: " dev-switch-label-xl " + className, htmlFor: `switch+${name}` },
            react_1.default.createElement("span", { className: ` dev-switch-button-xl ` }))));
}
//# sourceMappingURL=xl.js.map