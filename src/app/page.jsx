"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [check, setCheck] = useState([]);
  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = (index) => {
    confirm("Are you sure you want to delete this task?");
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const allDeleteHandler = () => {
    confirm("Are you sure you want to clear all completed task");
    todos.splice(0, todos.length);
    setTodos([...todos]);
  };
  const checkHandler = (index) => {};
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

        {todos.map((todo, index) => (
          <div className={styles.newsTodo} key={index}>
            <div className={styles.newsTodoLeft}>
              <input
                className={styles.checkbox}
                type="checkbox"
                onChange={(e) => setCheck(e.target.value)}
              />
              <p> {todo}</p>
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
      <div className={styles.tittle}>
        <div className={styles.compl}>
          <p>1 of {todos.length} tasks completed</p>
          <button onClick={allDeleteHandler}>Clear Completed</button>
        </div>
        <div className={styles.power}>
          <p className={styles.powerP}>Powered by</p>
          <a href="#">Pinecone Academy</a>
        </div>
      </div>
    </div>
  );
}

//  <p className={styles.tittleP}>No tasks yet. Add one above</p>
