var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
const ButtonXL = (props) => {
    const { children, backgroundColor, className = "", type = "button", title, disabled, onClick, disableHover = false, useStyle = false } = props, rest = __rest(props, ["children", "backgroundColor", "className", "type", "title", "disabled", "onClick", "disableHover", "useStyle"]);
    const [isFocused, setFocus] = useState(false);
    const style = useStyle
        ? {
            background: disableHover
                ? backgroundColor
                : isFocused
                    ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
                    : backgroundColor,
        }
        : {};
    return (React.createElement("button", Object.assign({ className: `moki-ui-dev dev-btn dev-btn-48 text-500-16 dev-border-8  ${className}`, onMouseEnter: () => setFocus(true), onMouseLeave: () => setFocus(false), style: style, type: type, title: title, onClick: onClick, disabled: disabled }, rest), children));
};
export default ButtonXL;
//# sourceMappingURL=xl.js.map