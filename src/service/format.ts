const currencyFormat = (num: any) => {
  num = parseInt(num) || null;
  return num?.toFixed(0)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&'") || 0;
};

export default { currencyFormat };
