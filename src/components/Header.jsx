import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" className="p-1 font-medium">
        <a href="/about">
          <Button className="flex items-center hover:text-white hover:bg-black transition-colors bg-white text-black">
            About
          </Button>
        </a>
      </Typography>
      <Typography as="li" className="p-1 font-medium">
        <a href="/contact">
          <Button className="flex items-center hover:text-white hover:bg-black transition-colors bg-white text-black">
            Contact Us
          </Button>
        </a>
      </Typography>
      <Typography as="li" className="p-1 font-medium">
        <a href="/login">
          <Button className="flex items-center hover:text-white hover:bg-black transition-colors bg-white text-black">
            Login
          </Button>
        </a>
      </Typography>
      <Typography as="li" className="p-1 font-medium">
        <a href="/register">
          <Button className="flex items-center hover:text-black hover:bg-white transition-colors bg-black text-white">
            Register
          </Button>
        </a>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 text-3xl font-bold"
        >
          Real Estate Project
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
