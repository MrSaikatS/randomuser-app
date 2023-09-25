import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import ThemeSwitch from "./ThemeSwitch";
import RefetchButton from "./RefetchButton";

const Nav = () => {
  return (
    <>
      <Navbar isBordered className="h-[7dvh]">
        <NavbarBrand>
          <p className="font-bold text-inherit">RandomUser</p>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>

          <NavbarItem>
            <RefetchButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
