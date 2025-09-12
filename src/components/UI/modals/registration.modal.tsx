"use client";

import RegistrationForm from "@/app/forms/registration.form";
import CustomModal from "@/components/common/modal";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const RegistrationModal = ({ onClose, isOpen }: IProps) => {
  return (
    <CustomModal onClose={onClose} isOpen={isOpen} title="Registration">
      <RegistrationForm onClose={onClose}></RegistrationForm>
    </CustomModal>
  );
};

export default RegistrationModal;
