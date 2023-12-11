import styles from "./Currency.module.css";
import { Image } from "shared/ui/Image";
import { Select } from "shared/ui/Select";
import { CURRENCY_LIST } from "shared/constants";
import { Container } from "shared/ui/Container";

interface CurrencyProps {
  currencyList: {
    id: number;
    value: string;
  }[];
  handleGetCurrency: (nameCurrency: string) => void;
}

export const Currency = ({ handleGetCurrency }: CurrencyProps) => {
  return (
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
  );
};
