import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Разворачивание проекта на Versel <br /> Конфлик версии ключевых
          технологии устранен.
        </h1>
        <Button variant="contained" color="primary">
          Test
        </Button>
      </div>
    </main>
  );
}
