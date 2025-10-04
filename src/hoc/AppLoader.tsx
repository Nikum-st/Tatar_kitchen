"use client";

import { useAuthState } from "@/store/auth.store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: IProps) => {
  const { data: session, status } = useSession();
  const { setAuthState } = useAuthState();

  useEffect(() => {
    setAuthState(status, session);
  }, [session, status, setAuthState]);

  return <div>{children}</div>;
};

export default AppLoader;
