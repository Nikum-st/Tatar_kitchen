"use server";

import { signIn } from "@/app/auth/route";

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
