"use server";

import { signOut } from "@/app/auth/route";

export async function signOutFunc() {
  try {
    const result = await signOut({ redirect: false });
    console.log("result ", result);

    return result;
  } catch (error) {
    console.error("Sign out error");

    throw error;
  }
}
