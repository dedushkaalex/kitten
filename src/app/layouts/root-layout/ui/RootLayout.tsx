import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <main className={styles.content}>
      <Outlet />
    </main>
  );
};
