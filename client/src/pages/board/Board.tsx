import React, { useEffect, useState } from "react";
import CardKanban from "../../components/CardKanban";
import axios from "axios";


interface Task {
  id: number;
  title: string;
  tag: "todo" | "doing" | "done";
  createAt: string;
}

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/kanbanboard")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error("Fetched data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-row-3 lg:grid-cols-3 gap-6">
      <div className="col bg-base-200 rounded-lg h-screen">
        <div className="py-4 bg-stone-500 rounded-t-lg flex justify-center items-center space-x-2">
          <p className="text-center text-white text-2xl font-bold uppercase ">
            ToDo
          </p>
        </div>

        <div className="mx-2 mt-2 mb-6 overflow-y-auto h-[calc(100vh-80px)] no-scrollbar">
          {tasks
            .filter((task) => task.tag === "todo")
            .map((task) => (
              <CardKanban
                key={task.id}
                id={task.id}
                title={task.title}
                tag={task.tag}
                createAt={task.createAt}
              />
            ))}
        </div>
      </div>
      <div className="bg-base-200 rounded-lg h-screen">
        <p className="text-center py-4 bg-yellow-500 rounded-t-lg text-white text-2xl font-bold uppercase flex justify-center items-center space-x-2">
          <p className="text-center text-white text-2xl font-bold uppercase ">
            Doing
          </p>
          
        </p>
        <div className="mx-2 mt-2 mb-6 space-y-2 overflow-y-auto h-[calc(100vh-80px)] no-scrollbar">
          {tasks
            .filter((task) => task.tag === "doing")
            .map((task) => (
              <CardKanban
                key={task.id}
                id={task.id}
                title={task.title}
                tag={task.tag}
                createAt={task.createAt}
              />
            ))}
        </div>
      </div>
      <div className="bg-base-200 rounded-lg h-screen">
        <p className="text-center py-4 bg-green-500 rounded-t-lg text-white text-2xl font-bold uppercase flex justify-center items-center space-x-2">
          <p className="text-center text-white text-2xl font-bold uppercase ">
            Done
          </p>
          
        </p>
        <div className="mx-2 mt-2 mb-6 space-y-2 overflow-y-auto h-[calc(100vh-80px)] no-scrollbar">
          {tasks
            .filter((task) => task.tag === "done")
            .map((task) => (
              <CardKanban
                key={task.id}
                id={task.id}
                title={task.title}
                tag={task.tag}
                createAt={task.createAt}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
