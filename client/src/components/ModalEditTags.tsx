import { useDisclosure } from "@mantine/hooks";
import { Modal, TagsInput } from "@mantine/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface ModalEditNameBoardProps {
  id: number;
  tag: string;
}

const ModalEditNameColumn: React.FC<ModalEditNameBoardProps> = ({
  id,
  tag,
}) => {
  const [dropdownOpened, { toggle }] = useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [newTag, setNewTag] = useState<string[]>([tag]);

  useEffect(() => {
    setNewTag([tag]);
  }, [tag]);

  const handleClose = () => {
    close();
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/update-tag/${id}`, {
        tag: newTag[0],
      });
      window.location.reload();
    } catch (error) {
      console.error("Error updating tag:", error);
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
        <div onClick={toggle} className="px-7 space-y-5 py-3">
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
              type="button" 
              onClick={handleClose}
              className="btn btn-outline border-[#F1F1F1] w-28 hover:text-current hover:bg-inherit hover:border-[#F1F1F1]"
            >
              Close
            </button>
            <button
              onClick={handleUpdate}
              className="btn rounded-lg text-white w-28 border-none bg-[#4ECB71] hover:bg-[#4ECB71] hover:border-none"
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      <button className="flex justify-center items-center" onClick={open}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-5 stroke-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ModalEditNameColumn;
