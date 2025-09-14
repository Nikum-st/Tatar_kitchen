import { registerUser } from "@/actions/registration";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await registerUser(formData);
    console.log("Form submited", result);

    onClose();
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email..."
        isRequired
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-fault-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "email is required";
          if (!validateEmail(value)) return "email is invaled";
          return null;
        }}
      />
      <Input
        name="password"
        placeholder="Password..."
        isRequired
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-fault-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "password is required";
          if (value.length < 6)
            return "password must be longer than 6 characters";
          return null;
        }}
      />
      <Input
        name="confirmPassword"
        placeholder="Confirm password..."
        isRequired
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-fault-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "confirm password is required";
          if (value !== formData.password) return "passwords do not match";
          return null;
        }}
      />
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Sign up
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
