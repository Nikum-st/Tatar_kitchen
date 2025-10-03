"use client";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import LoginModal from "../modals/Login.modal";
import RegistrationModal from "../modals/registration.modal";
import { useState } from "react";
import { signOutFunc } from "@/actions/sign-out";
import { useSession } from "next-auth/react";

export const Logo = () => {
  return (
    <Image
      src="/logo_tatar_kitchen.png"
      alt={siteConfig.title}
      width={26}
      height={26}
      priority
    />
  );
};

const handleSignOut = async () => {
  await signOutFunc();
};

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistartionOpen, setIsRegistartionOpen] = useState(false);
  const pathname = usePathname();

  const { status, data } = useSession();
  console.log(status, data);

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground"
            href={item.href}
            className={`px-3 py-1 border border-transparent rounded-md ${
              isActive ? "text-blue-400" : "text-foreground"
            } hover:text-blue-400 hover:border-blue-400 hover:border hover:rounded-md transition-colors transition-border duration-100`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href="/" className="flex gap-2 ">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            onPress={handleSignOut}
          >
            <p className="text-zinc-300">Log out</p>
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            onPress={() => setIsLoginOpen(true)}
          >
            <p className="text-zinc-300">Log in</p>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setIsRegistartionOpen(true)}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegistrationModal
        isOpen={isRegistartionOpen}
        onClose={() => setIsRegistartionOpen(false)}
      />
    </Navbar>
  );
}
