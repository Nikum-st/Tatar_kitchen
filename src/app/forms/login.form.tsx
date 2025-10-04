import { signInWithCredential } from "@/app/api/actions/sign-in";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signInWithCredential(
      formData.email,
      formData.password
    );
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

      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          log in
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
