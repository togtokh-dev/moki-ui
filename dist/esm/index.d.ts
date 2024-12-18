declare const _default: {
    MiniWeb: {
        Form: {
            Input: {
                LG: typeof import("./components/mini-web/form/input/lg").default;
                XL: typeof import("./components/mini-web/form/input/xl").default;
            };
            ClearInput: {
                LG: typeof import("./components/mini-web/form/clear-input/lg").default;
                XL: typeof import("./components/mini-web/form/clear-input/xl").default;
            };
            Switch: {
                LG: typeof import("./components/mini-web/form/switch/lg").default;
                XL: typeof import("./components/mini-web/form/switch/xl").default;
            };
        };
    };
    ResWeb: {
        Button: {
            SM: typeof import("./components/web/button/sm").default;
            MD: typeof import("./components/web/button/md").default;
            LG: typeof import("./components/web/button/lg").default;
            XL: typeof import("./components/web/button/xl").default;
        };
        Form: {
            Input: {
                LG: typeof import("./components/web/form/input/lg").default;
                XL: typeof import("./components/web/form/input/xl").default;
            };
            Switch: {
                LG: typeof import("./components/web/form/switch/lg").default;
                XL: typeof import("./components/web/form/switch/xl").default;
            };
            ClearInput: {
                LG: typeof import("./components/web/form/clear-input/lg").default;
                XL: typeof import("./components/web/form/clear-input/xl").default;
            };
        };
    };
    service: {
        format: {
            currencyFormat: (num: any) => any;
        };
    };
    utils: {
        Transition: typeof import("./utils/transition").default;
    };
};
export default _default;
export { default as Input } from "./components/mini-web/form/input";
export { default as ButtonLG } from "./components/mini-web/button/lg";
export { default as ButtonMD } from "./components/mini-web/button/md";
export { default as ButtonSM } from "./components/mini-web/button/sm";
export { default as ButtonXL } from "./components/mini-web/button/xl";
