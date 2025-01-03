"use client";
import { use, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todos2, setTodos2] = useState([...todos]);
  const [newTodo, setNewTodo] = useState({
    id: 0,
    name: "",
    complet: false,
  });
  const [activeFilter, setActiveFiler] = useState("all");

  const addTodoHandler = (e) => {
    if (newTodo.name.trim() === "") {
      alert("please enter a task!");
      return;
    }

    setTodos([...todos, newTodo]);
    setTodos2([...todos, newTodo]);
  };

  const checkedHandler = todos.filter((todo) => todo.complet).length;

  const deleteHandler = (index) => {
    confirm("Are you sure you want to delete this task?");
    todos.splice(index, 1);
    setTodos2([...todos]);
  };

  const allDeleteHandler = () => {
    confirm("Are you sure you want to clear all completed task");
    todos.splice(0, todos.length);
    setTodos2([...todos]);
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
    setTodos2([...filtered]);
  };

  const allButton = () => {
    setActiveFiler("all");
    setTodos2([...todos]);
  };

  const activeButton = () => {
    setActiveFiler("active");
    const activeFiltered = todos.filter((todo) => todo.complet == false);
    setTodos2([...activeFiltered]);
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
          todos2.map((todo, index) => (
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
                {checkedHandler} of {todos.length} tasks completed
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
