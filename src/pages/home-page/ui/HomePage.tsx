import { useState } from "react";

import { CURRENCYES, CURRENCY_LIST } from "shared/constants";

import { Currency } from "widgets/Currency";
import { CurrencyInfo } from "widgets/CurrencyInfo";

export const HomePage = () => {
  const [currencyFullName, setCurrencyFullName] = useState("");

  const getCurrencyFullName = (
    nameCurrency: string,
    currencyList: Record<string, string>,
  ) => {
    const currencyKey = Object.keys(currencyList).find(
      (currencyKey) => currencyKey === nameCurrency,
    );

    if (currencyKey) {
      return currencyList[currencyKey];
    }

    return `Currency ${nameCurrency} is not Full Name`;
  };

  const handleGetCurrency = (nameCurrency: string) => {
    setCurrencyFullName(() => getCurrencyFullName(nameCurrency, CURRENCYES));
  };

  return (
    <>
      <Currency
        handleGetCurrency={handleGetCurrency}
        currencyList={CURRENCY_LIST}
      />
      <CurrencyInfo currencyFullName={currencyFullName} />
    </>
  );
};
