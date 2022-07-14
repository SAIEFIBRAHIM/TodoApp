import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { taskAdd } from "../features/tasks";
const AddTask = () => {
  const [nDesc, setNdesc] = useState("");
  const navigate = useNavigate();
  const innerWidth = window.innerWidth;
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();
  const nTask = {
    taskId: Number(tasks.length),
    taskDesc: nDesc,
    isDone: false,
  };
  const handleAdd = () => {
    dispatch(taskAdd(nTask));
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-4">
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className="h-12 bg-white">New Task</span>
          <textarea
            placeholder="Task Description"
            className="textarea textarea-primary bg-transparent text-white text-lg"
            cols={innerWidth > 600 ? 60 : 30}
            rows={10}
            onChange={(e) => {
              setNdesc(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="flex gap-4">
        <button
          className="btn btn-accent w-28"
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </button>
        <button onClick={handleAdd} className="btn btn-primary w-44">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
