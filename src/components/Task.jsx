import { useState } from "react";
import PropTypes from "prop-types";

function Task({ task, removeTask, toggleChecked }) {
  const [checked, setChecked] = useState(task.checked);

  const handleTaskClick = () => {
    setChecked(!checked);
    toggleChecked(task.id);
  };

  return (
    <li className={`${checked ? "checked" : ""}`} onClick={handleTaskClick}>
      {task.name}
      <span onClick={() => removeTask(task.id)}>&times;</span>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleChecked: PropTypes.func.isRequired,
};

export default Task;
