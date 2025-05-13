import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";
import NextLink from "next/link";
import Image from "next/image";

import Logo from "../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="" src={Logo} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
