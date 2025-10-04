"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathName = usePathname();

  const currentNavItems = siteConfig.navItems.find(
    (item) => item.href === pathName
  );

  const pageLabel = currentNavItems ? currentNavItems.label : siteConfig.title;

  return (
    <div className="w-full flex justify-center mt-6 mb-12">
      <h1 className="text-3xl font-bold">{pageLabel}</h1>
    </div>
  );
};

export default Title;
