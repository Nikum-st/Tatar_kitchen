"use client";

import LoginForm from "@/app/forms/login.form";
import CustomModal from "@/components/common/modal";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const LoginModal = ({ onClose, isOpen }: IProps) => {
  return (
    <CustomModal onClose={onClose} isOpen={isOpen} title="Log in">
      <LoginForm onClose={onClose}></LoginForm>
    </CustomModal>
  );
};

export default LoginModal;
