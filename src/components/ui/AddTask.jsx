import React from "react";
import { Context } from "../../context/userContext";

const AddTask = () => {
  const {
    taskData,
    handleOnChange,
    loading,
    createTask,
    updateTask,
    editTaskId,
  } = Context();
  return (
    <div>
      <h1>{editTaskId ? "Edit Task" : "Add Task"}</h1>
      <form className="" onSubmit={editTaskId ? updateTask : createTask}>
        <div className="mb-3">
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Task Title"
            className="input"
            name="taskTitle"
            value={taskData.taskTitle}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label>Task Description</label>
          <textarea
            type="text"
            placeholder="Task Description"
            className="input"
            name="taskDescription"
            value={taskData.taskDescription}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label>Assign Task to: </label>
          <input
            type="text"
            placeholder="Task Assigned User"
            className="input"
            name="assignedTo"
            value={taskData.assignedTo}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label>Task Status</label>
          <input
            type="text"
            placeholder="Task Status"
            className="input"
            name="taskStatus"
            value={taskData.taskStatus}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label>Task Date</label>
          <input
            type="date"
            className="input"
            name="taskDate"
            value={taskData.taskDate}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label className="text-sm">Level</label>
          <input
            type="text"
            placeholder="Enter Task Level"
            className="input"
            name="level"
            value={taskData.level}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading
            ? editTaskId
              ? "Updating..."
              : "Adding...."
            : editTaskId
            ? "Update Task"
            : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
