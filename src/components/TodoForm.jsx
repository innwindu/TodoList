import { useEffect, useState } from "react";
import TodoInput from "./TodoinputBlock/TodoInput";
import { v4 as uuidv4 } from "uuid";
import NewTask from "./TasksBlock/NewTask";
import FilterBlock from "./FilterBlock/FilterBlock";
import EditForm from "./TasksBlock/EditForm";
import FooterBlock from "./FooterBlock/FooterBlock";
uuidv4();

export default function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function deleteTodos() {
    setTodos((todos) => (todos = []));
  }

  function deleteDoneTasks() {
    setTodos(todos.filter((todo) => todo.completed === false));
    todos.map((todo) =>
      todo.completed === true ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function filterTasks(status) {
    if (status === "all") {
      setFiltered(todos);
    } else {
      let newTodo = [...todos].filter((todo) => todo.completed === status);
      setFiltered(newTodo);
    }
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <FilterBlock filterTasks={filterTasks} />
      {filtered.map((todo, index) =>
        todo.isEditing ? (
          <EditForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <NewTask
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      <FooterBlock
        deleteTodos={deleteTodos}
        deleteDoneTasks={deleteDoneTasks}
      />
    </div>
  );
}
