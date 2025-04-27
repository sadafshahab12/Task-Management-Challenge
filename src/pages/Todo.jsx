import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import { Context } from "../context/TaskContext";
import AddTask from "../components/ui/AddTask";

const Todo = () => {
  const {
    isOpenModal,
    openModal,
    closeModal,
    taskList,
    deleteTaskId,
    startEditTask,
  } = Context();
  return (
    <div>
      <div className="flex-center justify-between items-center mb-4 pt-5 pb-2 border-b border-gray-100">
        <h1 className="text-2xl pb-4 font-bold">Tasks Board</h1>
        <button className="button w-auto cursor-pointer" onClick={openModal}>
          {" "}
          + Add Task
        </button>
      </div>
      {/* open modal  */}
      <div>
        {isOpenModal && (
          <div className="inset-0 fixed bg-black/30 flex-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg relative w-[30rem]">
              <button
                className="absolute top-2 right-2 text-black"
                onClick={closeModal}
              >
                <IoCloseOutline className="cursor-pointer" />
              </button>
              <AddTask />
            </div>
          </div>
        )}
      </div>
      <div className="task-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <div
              key={task.id}
              className="bg-indigo-200 p-5 rounded-lg space-y-2"
            >
              <h2 className="font-bold text-xl">{task.taskTitle}</h2>
              <p>Assigned To: {task.assignedTo}</p>
              <p>{task.taskDescription}</p>
              <div className=" flex-center justify-between text-12">
                <p>{task.taskStatus}</p>
                <p>{task.taskDate}</p>
                <p>{task.level}</p>
              </div>
              <div className="flex-center gap-3 justify-between">
                <FaTrash
                  className="cursor-pointer"
                  onClick={() => deleteTaskId(task.id)}
                />
                <FiEdit
                  className="cursor-pointer"
                  onClick={() => startEditTask(task)}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No Tasks Available</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
