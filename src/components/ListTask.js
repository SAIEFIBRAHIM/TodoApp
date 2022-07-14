import React from "react";
import Task from "./Task";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { taskFilter } from "../features/tasks";

const ListTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(taskFilter(e.target.value));
  };
  return (
    <>
      <div className=" hidden lg:md:grid lg:md:grid-flow-col lg:md:grid-col-3 lg:md:gap-4 lg:md:justify-center">
        <select
          className="select select-primary w-[27.6rem] col-span-2 label-text my-8  text-white bg-gray-900 "
          defaultValue={"Filter"}
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option value="Filter" disabled>
            Filter
          </option>
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Todo">Todo</option>
        </select>
        <button
          className="btn btn-primary w-36 my-8"
          onClick={() => {
            navigate("/addtask");
          }}
        >
          New Task
        </button>
      </div>
      <Task />
    </>
  );
};

export default ListTask;
