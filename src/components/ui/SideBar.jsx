import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { LuLayoutDashboard, LuListTodo } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { Context } from "../../context/TaskContext";
import AddTask from "./AddTask";
import { IoCloseOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  const { openModal, isOpenModal, closeModal } = Context();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log("Logout Error", error);
    }
  };
  return (
    <div className="space-y-6">
      <div className=" flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111561.png"
          alt="task"
          className="w-10 h-10"
        />
        <h1 className="font-bold text-2xl md:block hidden">Task Manager</h1>
        <h1 className="font-bold text-2xl md:hidden  block">TM</h1>
      </div>
      <div className="md:block hidden">
        <button className="button w-full" onClick={openModal}>
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
      <div className="space-y-3 hidden md:block">
        <Link to="/dashboard" className="flex-center gap-3 cursor-pointer">
          <LuLayoutDashboard />
          <p>Dashboard</p>
        </Link>

        <Link to="/todo" className="flex-center gap-3 cursor-pointer">
          <LuListTodo />
          <p>ToDo</p>
        </Link>
        <Link to="/pending" className="flex-center gap-3 cursor-pointer">
          <MdPendingActions />
          <p>InProgress</p>
        </Link>
        <Link to="/completed" className="flex-center gap-3 cursor-pointer">
          <FaCircleCheck />
          <p>Completed</p>
        </Link>

        <Link to="/team" className="flex-center gap-3 cursor-pointer">
          <RiTeamFill />
          <p>Team</p>
        </Link>
        <Link to="/deletedTask" className="flex-center gap-3 cursor-pointer">
          <FaTrash />
          <p>Trash</p>
        </Link>
      </div>
      {/* -----------------  */}
      <div className="space-y-5 md:hidden block">
        <div className="md:hidden block text-center ">
          <button
            className="button w-auto px-4 text-2xl font-black"
            onClick={openModal}
          >
            +{" "}
          </button>
        </div>
        <Link
          to="/dashboard"
          className="flex-center justify-center gap-3 cursor-pointer"
        >
          <LuLayoutDashboard className="w-6 h-6" />
        </Link>

        <Link
          to="/todo"
          className="flex-center justify-center  gap-3 cursor-pointer"
        >
          <LuListTodo className="w-6 h-6" />
        </Link>
        <Link
          to="/pending"
          className="flex-center justify-center gap-3 cursor-pointer"
        >
          <MdPendingActions className="w-6 h-6" />
        </Link>
        <Link
          to="/completed"
          className="flex-center justify-center gap-3 cursor-pointer"
        >
          <FaCircleCheck className="w-6 h-6" />
        </Link>

        <Link
          to="/team"
          className="flex-center justify-center gap-3 cursor-pointer"
        >
          <RiTeamFill className="w-6 h-6" />
        </Link>
        <Link
          to="/deletedTask"
          className="flex-center justify-center gap-3 cursor-pointer"
        >
          <FaTrash className="w-6 h-6" />
        </Link>
        <button
          className="button mx-auto px-2 w-auto md:hidden block"
          onClick={handleLogout}
        >
          <IoIosLogOut className="w-5 h-5" />
        </button>
      </div>
      <div>
        <button
          className="button w-full md:block hidden"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
