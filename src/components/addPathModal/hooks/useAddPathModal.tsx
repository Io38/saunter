import { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { clearNewPath } from "redux/slices/paths/pathsSlice";

const useAddPathModal = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    dispatch(clearNewPath());
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useAddPathModal;
