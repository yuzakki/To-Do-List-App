import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function AddNewTask({ addTask, tasks }) {
  const [newTask, setNewTask] = useState({
    name: "",
    checked: false,
  });
  const [showError, setShowError] = useState(false);
  const [duplicateTask, setDuplicateTask] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskName = newTask.name.trim();

    if (taskName && !tasks.some((task) => task.name === taskName)) {
      addTask({ ...newTask, id: uuidv4() });
      setNewTask({ name: "", checked: false });
      setShowError(false);
      setDuplicateTask(false);
    } else if (!taskName) {
      setShowError(true);
    } else {
      setDuplicateTask(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {showError && (
        <span className="error-message">You must write something!</span>
      )}
      {duplicateTask && <span className="error-message">Duplicate tasks!</span>}
      <div className="flex">
        <input
          type="text"
          id="input-box"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          placeholder="Add your text"
        />
        <button className="xs:px-[50px] p-7 py-4">Add</button>
      </div>
    </form>
  );
}

AddNewTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default AddNewTask;
