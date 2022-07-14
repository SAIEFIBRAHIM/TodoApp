import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { FiFilter } from "react-icons/fi";
import { MdAddCircleOutline, MdOutlineHome } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import EditTask from "./components/EditTask";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" h-screen">
      <Routes>
        <Route index path="/" element={<ListTask />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/edit/:idRoute" element={<EditTask />} />
      </Routes>

      <div className="btm-nav btm-nav-md lg:md:sm:hidden bg-gray-800">
        <button
          className={location.pathname === "/" ? "bg-white" : "text-primary"}
          onClick={() => {
            navigate("/");
          }}
        >
          <MdOutlineHome size={25} />
          <span className="btm-nav-label">Home</span>
        </button>
        <button
          className={
            location.pathname === "/addtask" ? " bg-white" : "text-primary"
          }
          onClick={() => {
            navigate("/addtask");
          }}
        >
          <MdAddCircleOutline size={20} />
          <span className="btm-nav-label">Add</span>
        </button>
        <button className="text-primary">
          <FiFilter size={20} />
          <span className="btm-nav-label">Filter</span>
        </button>
      </div>
    </div>
  );
}

export default App;
