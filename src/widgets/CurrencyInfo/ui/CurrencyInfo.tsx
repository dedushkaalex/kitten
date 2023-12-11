import { CurrencyCard } from "entities/CurrencyCard";

import styles from "./CurrencyInfo.module.css";

interface CurrencyInfoProps {
  currencyFullName: string;
}

export const CurrencyInfo = ({ currencyFullName }: CurrencyInfoProps) => {
  return (
    <section className={styles.currency__info}>
      <CurrencyCard currencyName={currencyFullName} />
    </section>
  );
};
