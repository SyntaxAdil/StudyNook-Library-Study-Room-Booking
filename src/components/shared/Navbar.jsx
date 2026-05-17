import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
