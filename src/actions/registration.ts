"use server";

import { IFormData } from "@/types/form-data";
import prisma from "@/utils/prisma";
import { error } from "console";

export const registerUser = async (formData: IFormData) => {
  const { email, password } = formData;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    console.log(`user`, user);

    return user;
  } catch (e) {
    console.error("Error of registration", error);
  }
};
