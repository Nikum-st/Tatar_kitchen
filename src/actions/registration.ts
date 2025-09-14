"use server";

import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";
import { error } from "console";

export const registerUser = async (formData: IFormData) => {
  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  if (password.length < 6) {
    return { error: "Password must be more 6 symbols" };
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return { error: "Such password already exists" };
    }

    const passwordHash = await saltAndHashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
      },
    });

    console.log(`user`, user);

    return user;
  } catch (e) {
    console.error("Error of registration", error);
  }
};
