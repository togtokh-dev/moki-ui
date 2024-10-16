const currencyFormat = (num) => {
    var _a;
    num = parseInt(num) || null;
    return ((_a = num === null || num === void 0 ? void 0 : num.toFixed(0)) === null || _a === void 0 ? void 0 : _a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&'")) || 0;
};
export default { currencyFormat };
//# sourceMappingURL=format.js.map