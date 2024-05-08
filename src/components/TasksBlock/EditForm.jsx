import styles from "./EditForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function EditForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(event) {
    event.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder="Update Todo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button className={styles.button} type="submit" hidden>
          Add new task
        </Button>
      </div>
    </form>
  );
}
