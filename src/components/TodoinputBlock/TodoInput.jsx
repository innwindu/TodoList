import styles from "./TodoInput.module.css";
import inputIcon from "../images/inputIcon.png";
import Button from "../Button/Button";
import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <img src={inputIcon} className={styles.inputIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder="New Todo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button className={styles.button} type="submit">
          Add new task
        </Button>
      </div>
    </form>
  );
}
