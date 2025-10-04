import { Session } from "next-auth";
import { create } from "zustand";

type SessionStatus = "authenticated" | "unauthenticated" | "loading";

interface AuthState {
  status: SessionStatus;
  isAuth: boolean;
  session: Session | null;
  setAuthState: (status: SessionStatus, session: Session | null) => void;
}

export const useAuthState = create<AuthState>((set) => ({
  isAuth: false,
  status: "unauthenticated",
  session: null,
  setAuthState: (status: SessionStatus, session: Session | null) => {
    set({
      isAuth: status === "authenticated",
      status,
      session,
    });
  },
}));
