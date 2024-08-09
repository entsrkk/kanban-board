import { useDisclosure } from "@mantine/hooks";
import { Modal, TagsInput } from "@mantine/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface ModalEditNameBoardProps {
  id: number;
  title: string;
  tag: string;
}

const ModalEditNameBoard: React.FC<ModalEditNameBoardProps> = ({
  id,
  title,
  tag,
}) => {
  const [dropdownOpened, { toggle }] = useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newTag, setNewTag] = useState<string[]>([tag]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/task/${id}`);
        setNewTag(response.data.tag);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/update/${id}`, {
        title: newTitle,
        tag: newTag[0],
      });
      window.location.reload();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="auto"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          className="px-7 space-y-5 py-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="font-semibold text-lg text-center uppercase">
            Edit Task
          </h3>
          <label className="rounded-none border-b flex items-center">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="grow focus:outline-none"
            />
          </label>
          <TagsInput
            label="Please choose 1 thing"
            onClick={toggle}
            data={["todo", "doing", "done"]}
            value={newTag}
            onChange={(values) => setNewTag(values)}
            dropdownOpened={dropdownOpened}
          />
          <div className="modal-action flex justify-center items-center">
            <button
              onClick={handleDelete}
              className="btn btn-outline border-[#F1F1F1] w-28 hover:text-current hover:bg-inherit hover:border-[#F1F1F1]"
            >
              Delete
            </button>
            <button
              onClick={handleUpdate}
              className="btn rounded-lg text-white w-28 border-none bg-[#4ECB71] hover:bg-[#4ECB71] hover:border-none"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
      <button className="flex justify-center items-center" onClick={open}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-5 stroke-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
    </div>
  );
};

export default ModalEditNameBoard;
