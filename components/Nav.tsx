import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Nav = () => {
  return (
    <>
      <Navbar isBordered className='h-[7dvh]'>
        <NavbarBrand>
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>

        <NavbarContent justify='end'>
          <NavbarItem>
            <Button color='primary' variant='flat'>
              Refresh
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
