import Button from "../Button/Button";
import styles from "./FooterBlock.module.css";

export default function FooterBlock({ deleteTodos, deleteDoneTasks }) {
  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={deleteDoneTasks}>
        Delete done tasks
      </Button>
      <Button className={styles.button} onClick={deleteTodos}>
        Delete all tasks
      </Button>
    </div>
  );
}
