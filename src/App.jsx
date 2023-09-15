/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AddNewTask from "./components/AddNewTask";
import Task from "./components/Task";

function App() {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialTasks);

  const toggleChecked = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <>
      {" "}
      <div className="container">
        <div className="todo-app">
          <h2>
            To-Do List <img src="/images/icon.png" alt="icon" />
          </h2>

          <AddNewTask addTask={addTask} tasks={tasks} />

          {tasks.length ? (
            <ul>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  removeTask={removeTask}
                  toggleChecked={toggleChecked}
                />
              ))}
            </ul>
          ) : (
            <h2
              style={{
                height: "100px",
                justifyContent: "center",
                margin: "0",
              }}
            >
              Let's Add Some Tasks! 🙌
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
