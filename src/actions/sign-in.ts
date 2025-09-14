import { signIn } from "@/auth/auth";

export async function signInWithCredential(email: string, password: string) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return result;
  } catch (error) {
    console.error("Authorization error");

    throw error;
  }
}
