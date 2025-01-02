"use client";
import { use, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todos2, setTodos2] = useState([]);
  const [newTodo, setNewTodo] = useState({
    name: "",
    complet: false,
  });
  const [checked, setChecked] = useState(0);
  const [activeFilter, setActiveFiler] = useState("all");
  //   const [completed, setCompleted] = useState([]);
  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
    console.log();
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
  const checkBoxHandler = (e, index) => {
    todos[index].complet
      ? (todos[index].complet = false)
      : (todos[index].complet = true);
    setTodos([...todos]);
  };
  const completButtun = () => {
    setActiveFiler("completed");
    const filtered = todos.filter((todo) => todo.complet == true);
    setTodos2(todos);
    setTodos([...filtered]);
  };
  const allButton = () => {
    setActiveFiler("all");
    setTodos([...todos2]);
  };
  const activeButton = () => {
    setActiveFiler("active");
    const activeFiltered = todos2.filter((todo) => todo.complet == false);
    setTodos2(todos);
    setTodos([...activeFiltered]);
  };
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <h1>To-Do list</h1>
        <div className={styles.flex}>
          <input
            type="text"
            placeholder="Add a new task..."
            onChange={(e) =>
              setNewTodo({ name: `${e.target.value}`, complet: false })
            }
          />
          <button className={styles.addButton} onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className={`${styles.flex} ${styles.filterButtons}`}>
          <button
            className={activeFilter == "all" ? styles.active : styles.offline}
            onClick={() => allButton("all")}
          >
            All
          </button>
          <button
            className={
              activeFilter == "active" ? styles.active : styles.offline
            }
            onClick={() => activeButton("active")}
          >
            Active
          </button>
          <button
            className={
              activeFilter == "completed" ? styles.active : styles.offline
            }
            onClick={() => completButtun("completed")}
          >
            Completed
          </button>
        </div>

        {todos.length ? (
          todos.map((todo, index) => (
            <div key={index} className={styles.task}>
              <div className={styles.newsTodo} key={index}>
                <div className={styles.newsTodoLeft}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={todo.complet}
                    onChange={() =>
                      checkBoxHandler(event.target.checked, index)
                    }
                  />

                  <p> {todo.name}</p>
                </div>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className={styles.noTask}>No tasks yet.Add one above</p>
          </div>
        )}
        <div className={styles.tittle}>
          {todos.length ? (
            <div className={styles.compl}>
              <p>
                {} of {todos.length} tasks completed
              </p>
              <button onClick={allDeleteHandler}>Clear Completed</button>
            </div>
          ) : (
            ""
          )}
          <div className={styles.power}>
            <p className={styles.powerP}>Powered by</p>
            <a href="#">Pinecone Academy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <p className={styles.tittleP}>No tasks yet. Add one above</p>
