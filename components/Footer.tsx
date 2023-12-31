import { Link, Navbar } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <Navbar className="h-[7dvh] border-t border-divider">
        <div className="flex w-full flex-col items-center justify-center">
          <Link href="https://randomapi.com" className="text-center">
            Powered by RandomAPI
          </Link>

          <Link href="https://randomuser.me" className="text-center">
            https://randomuser.me
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Footer;
