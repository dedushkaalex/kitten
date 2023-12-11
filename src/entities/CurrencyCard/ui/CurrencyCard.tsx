import cn from "classnames";

import { Container } from "shared/ui/Container";

import styles from "./CurrencyCard.module.css";

interface CurrencyCardProps {
  currencyName: string;
  className?: string;
}

export const CurrencyCard = ({
  currencyName,
  className,
}: CurrencyCardProps) => {
  return (
    <Container>
      <h1 className={cn(styles.currency__text, className)}>{currencyName}</h1>
    </Container>
  );
};
