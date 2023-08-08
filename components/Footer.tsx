// import { Card, CardBody, Link } from "@nextui-org/react";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <Navbar className='h-[7dvh] border-t border-divider'>
        <div className='flex flex-col justify-center items-center w-full'>
          <Link href='https://randomapi.com' className='text-center'>
            Powered by RandomAPI
          </Link>

          <Link href='https://randomuser.me' className='text-center'>
            https://randomuser.me
          </Link>
        </div>
      </Navbar>
      {/* <Card className='justify-center'>
        <CardBody className=''>
          
          <Link href='https://randomuser.me' className='text-center'>
            https://randomuser.me
          </Link>
        </CardBody>
      </Card> */}
    </>
  );
};

export default Footer;
