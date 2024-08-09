import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = (e: any) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/create`, task);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setTask({
      title: ""
    });
    navigate("/");
  };

  return (
    <div className="container mt-12 mx-auto w-80 sm:w-96 md:w-[35rem] lg:w-full max-w-3xl justify-between items-center rounded-[1rem] shadow-2xl border">
      <h1 className="text-4xl text-center font-bold py-7">
        Create Task
      </h1>
      <div className="card card-body justify-center items-center py-4">
        <div className="mx-auto w-full max-w-lg">
          <form className="space-y-3 ">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Name Task
              </label>
              <input
                name="title"
                type="text"
                className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-none"
                value={task.title}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="join justify-center items-center mt-4">
          <a
            className="btn btn-warning mx-1.5 w-32 hover:bg-yellow-500 hover:text-base-100"
            onClick={handleClick}
          >
            Add
          </a>
          <a
            className="btn btn-error mx-1.5 w-32 hover:bg-rose-600 hover:text-base-100"
            onClick={handleCancel}
          >
            Cancel
          </a>
        </div>
        <div className="error text-red-600">
          {error && "somthing went wrong !!"}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
