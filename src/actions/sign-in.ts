"use server";

import { signIn } from "@/auth/auth";

export async function signInWithCredential(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return response;
  } catch (error) {
    console.error("Authorization error:", error);
    throw error;
  }
}
