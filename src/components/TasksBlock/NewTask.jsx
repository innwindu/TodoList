import styles from "./NewTask.module.css";

export default function NewTask({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p
          className={`${task.completed ? styles.completed : styles.active}`}
          onDoubleClick={() => editTodo(task.id)}
        >
          {task.task}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? styles.cheked : styles.uncheked}`}
        ></button>
        <button
          className={styles.edit}
          onClick={() => editTodo(task.id)}
        ></button>
        <button
          className={styles.delete}
          onClick={() => deleteTodo(task.id)}
        ></button>
      </div>
    </div>
  );
}
