import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import AlertSq from "../assets/icons/AlertSq";
const PopupTheme = {
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900/50 dark:bg-gray-900/80",
      off: "hidden",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start",
    },
  },
  content: {
    base: "relative w-[531px] h-[213px] p-6 md:h-auto mt-5",
    inner:
      "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700 w-[531px] h-[213px]",
  },
  body: {
    base: "flex-1 overflow-auto p-6 ",
    popup: "pt-6",
  },
  header: {
    base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
    popup: "border-b-0 p-2",
    title: "text-xl font-medium text-gray-900 dark:text-white",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      icon: "h-5 w-5",
    },
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    popup: "border-t",
  },
};
const DeleteComponents = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal
        theme={PopupTheme}
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        {/* <ModalHeader /> */}

        <ModalBody>
          <div className="text-center">
            <AlertSq className="mx-auto mb-2 h-12 w-12 text-gray-400 dark:text-gray-200" />
            <p className="font-semibold font-poppins text-[14px] mb-2">
              Confirm Deletion
            </p>
            <h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400 font-poppins text-[12px]">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="border border-solid bg-white text-[#244937] border-[#244937] hover:bg-[#244937] hover:text-white w-[130px] h-[40px] font-poppins text-[14px] font-semibold"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#244937] border border-solid text-white hover:bg-white hover:text-[#244937] w-[130px] h-[40px] font-poppins text-[14px] font-semibold"
                onClick={() => setOpenModal(false)}
              >
                Delete
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DeleteComponents;
