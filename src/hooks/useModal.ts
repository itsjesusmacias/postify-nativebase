import { useCallback, useState } from "react";

// types

interface IReturn {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

type Prop = boolean;

const useModal = (initialState: Prop = false): IReturn => {
  const [showModal, setShowModal] = useState(initialState);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return { showModal, openModal, closeModal };
};

export { useModal };
