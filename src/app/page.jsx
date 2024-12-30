"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <h1>To-Do list</h1>
        <div className={styles.flex}>
          <input
            type="text"
            placeholder="Add a new task..."
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={styles.addButton} onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className={styles.flex}>
          <button className={styles.allButton}>All</button>
          <button className={styles.fButtons}>Active</button>
          <button className={styles.fButtons}>Completed</button>
        </div>
        <div>
          {todos.map((todo, index) => (
            <div className={styles.newsTodo} key={index}>
              <div className={styles.newsTodoLeft}>
                <input type="checkbox" />
                {todo}
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => deleteHandler(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tittle}>
        <p className={styles.tittleP}>No tasks yet. Add one above</p>
        <div className={styles.power}>
          <p className={styles.powerP}>Powered by</p>
          <a href="#">Pinecone Academy</a>
        </div>
      </div>
    </div>
  );
}
