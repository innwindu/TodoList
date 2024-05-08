import Button from "../Button/Button";
import styles from "./FilterBlock.module.css";

export default function FilterBlock({ filterTasks }) {
  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={() => filterTasks("all")}>
        All
      </Button>
      <Button className={styles.button} onClick={() => filterTasks(true)}>
        Done
      </Button>
      <Button className={styles.button} onClick={() => filterTasks(false)}>
        Todo
      </Button>
    </div>
  );
}
