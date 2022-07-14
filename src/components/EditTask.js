import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { taskEdit } from "../features/tasks";

const EditTask = () => {
  const tasks = useSelector((state) => state.tasks.value);
  const { idRoute } = useParams();
  let idr = Number(idRoute);
  const [nlDesc, setNldesc] = useState(tasks[idr].taskDesc);

  const navigate = useNavigate();
  const innerWidth = window.innerWidth;
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(taskEdit({ nDesc: nlDesc, idt: idr }));
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
            value={nlDesc}
            onChange={(e) => {
              setNldesc(e.target.value);
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
        <button onClick={handleEdit} className="btn btn-primary w-44">
          Edit Task
        </button>
      </div>
    </div>
  );
};
export default EditTask;
