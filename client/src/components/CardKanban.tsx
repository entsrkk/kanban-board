import React, { useEffect, useState } from "react";
import ModalEditNameBoard from "./ModalEditTask";
import ModalEditTags from "../components/ModalEditTags";
import { format } from 'date-fns';

interface CardKanbanProps {
  id: number;
  title: string;
  tag: string;
  createAt: string;
}

const CardKanban: React.FC<CardKanbanProps> = ({
  id,
  title,
  tag,
  createAt,
}) => {
  const [bgColor, setBgColor] = useState<string>("");

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    setBgColor(randomColor());
  }, []);

  const tagColors = () => {
    if (tag === "todo") {
      return "bg-gray-200";
    } else if (tag === "doing") {
      return "bg-yellow-200";
    } else if (tag === "done") {
      return "bg-green-200";
    }
  };

  const formattedDate = format(new Date(createAt), 'dd/MM/yyyy');

  return (
    <div className="card bg-base-100 text-primary-content overflow-hidden m-2 sm:m-4">
      <div className="card-body relative">
        <div
          className="absolute w-full h-1 sm:h-2 left-0 right-0 top-0"
          style={{ backgroundColor: bgColor }}
        ></div>
        <div className="flex items-baseline justify-between">
          <h2 className="font-semibold text-lg sm:text-xl line-clamp-1 sm:line-clamp-2 ">
            {title}
          </h2>
          <ModalEditNameBoard id={id} title={title} tag={tag} />
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex">
            <span
              className={`badge sm:badge-lg border-none capitalize ${tagColors()}`}
            >
              {tag}
              <button>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
            <button className="w-6 h-6 rounded-full flex justify-center items-center">
              <ModalEditTags id={id} tag={tag}/>
            </button>
          </div>
          <div>
            <p className="font-light text-stone-500">{formattedDate}</p>
          </div>
        </div>
        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-8">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar">
            <button className="bg-base-300 hover:bg-stone-500 w-8 flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKanban;
