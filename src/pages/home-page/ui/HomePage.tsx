import { useState } from "react";

import { CurrencyCard } from "entities/CurrencyCard";
import { CURRENCYES, CURRENCY_LIST } from "shared/constants";
import { Container } from "shared/ui/Container";
import { Image } from "shared/ui/Image";
import { Select } from "shared/ui/Select";

import styles from "./HomePage.module.css";

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
      <section className={styles.currency}>
        <Container>
          <div className={styles.currency__row}>
            <div className={styles.currency__column}>
              <h1 className={styles.logo}>
                <span className={styles["logo--big"]}>cat</span>
                <span className={styles["logo--small"]}>
                  currencies academic terms
                </span>
              </h1>

              <div className={styles.logo__image__wrapper}>
                <Image
                  src="/kitten.png"
                  alt="kitten logo"
                  className={styles.logo__image}
                />
              </div>
            </div>
            <div className={styles.currency__column}>
              <Select
                options={CURRENCY_LIST}
                label="Country"
                onClick={handleGetCurrency}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.currency__info}>
        <CurrencyCard currencyName={currencyFullName} />
      </section>
    </>
  );
};
