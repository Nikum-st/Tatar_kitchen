"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="p-2.5 flex flex-col items-center justify-center">
      <div className="text-8xl">404</div>
      <div className="text-3xl text-green-100">Page not found</div>
      <div className="pt-6">
        <Button as={Link} href="/">
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
