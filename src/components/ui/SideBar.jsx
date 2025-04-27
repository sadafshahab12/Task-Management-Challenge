import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { LuLayoutDashboard, LuListTodo } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { Context } from "../../context/TaskContext";
import AddTask from "./AddTask";
import { IoCloseOutline } from "react-icons/io5";

const SideBar = () => {
  const { openModal, isOpenModal, closeModal } = Context();
  return (
    <div className="space-y-6">
      <div className=" flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111561.png"
          alt="task"
          className="w-10 h-10"
        />
        <h1>Task Manager</h1>
      </div>
      <div>
        <button className="button w-auto" onClick={openModal}>
          + New Task{" "}
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
      <div className="space-y-3">
        <a href="/dashboard" className="flex-center gap-3 cursor-pointer">
          <LuLayoutDashboard />
          <p>Dashboard</p>
        </a>

        <a href="/todo" className="flex-center gap-3 cursor-pointer">
          <LuListTodo />
          <p>ToDo</p>
        </a>
        <a href="/pending" className="flex-center gap-3 cursor-pointer">
          <MdPendingActions />
          <p>InProgress</p>
        </a>
        <a href="/completed" className="flex-center gap-3 cursor-pointer">
          <FaCircleCheck />
          <p>Completed</p>
        </a>

        <a href="/team" className="flex-center gap-3 cursor-pointer">
          <RiTeamFill />
          <p>Team</p>
        </a>
        <a href="/deletedTask" className="flex-center gap-3 cursor-pointer">
          <FaTrash />
          <p>Trash</p>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
