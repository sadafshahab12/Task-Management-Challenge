import React from "react";
import { Context } from "../context/TaskContext";

const Dashboard = () => {
  const { taskList } = Context();
  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
      <div className="  rounded-lg border-2 border-indigo-500 p-2 ">
        <div className="bg-indigo-200 h-50 w-full rounded-lg flex flex-col justify-center px-10 ">
          <p>Tasks</p>
          <p className="text-5xl font-bold">{taskList.length}</p>
        </div>
      </div>
      <div className=" rounded-lg border-2 border-indigo-500 p-2 ">
        <div className="bg-indigo-200 h-50 w-full rounded-lg flex flex-col justify-center px-10 ">
          <p>Todo</p>
          <p className="text-5xl font-bold">{taskList.length}</p>
        </div>
      </div>
      <div className="  rounded-lg border-2 border-indigo-500 p-2 ">
        <div className="bg-indigo-200 h-50 w-full rounded-lg flex flex-col justify-center px-10 ">
          <p>InProgress</p>
          <p className="text-5xl font-bold">{taskList.length}</p>
        </div>
      </div>
      <div className="  rounded-lg border-2 border-indigo-500 p-2 ">
        <div className="bg-indigo-200 h-50 w-full rounded-lg flex flex-col justify-center px-10 ">
          <p>Done</p>
          <p className="text-5xl font-bold">{taskList.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
