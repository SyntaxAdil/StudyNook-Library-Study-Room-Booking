"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { authClient, useSession } from "../../lib/auth/auth-client";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { ThemeSwitch } from "../../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(var(--background-rgb), 0)", "rgba(var(--background-rgb), 0.8)"],
  );

  const handleSignOut = async () => {
    await authClient.signOut();
    router.refresh();
    router.push("/login");
  };

  const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    ...(user
      ? [
          { href: "/add-room", label: "Add Room" },
          { href: "/my-listing", label: "My Listing" },
          { href: "/my-bookings", label: "My Bookings" },
        ]
      : []),
  ];

  return (
    <header>
      <motion.nav
        style={{
          backgroundColor,
          backdropFilter: "blur(12px)",
          borderBottomColor: "var(--border)",
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b transition-colors duration-500"
      >
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 bg-accent rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <FaBookReader className="text-accent-foreground text-xl" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            StudyNook
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <NavLink
                href={l.href}
                className="text-sm font-medium  hover:text-accent transition-colors"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center justify-center">
            <ThemeSwitch />
          </div>

          {user ? (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />

                  <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>

              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image alt={user?.name} src={user?.image} />

                      <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                    </Avatar>

                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">
                        {user?.name}
                      </p>

                      <p className="text-xs leading-none text-muted">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                    onClick={handleSignOut}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>

                      <FaArrowUpRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="light"
                  size="sm"
                  className="font-medium text-foreground"
                >
                  Login
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 font-semibold"
                  size="sm"
                >
                  Join Free
                </Button>
              </Link>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-foreground hover:bg-default-100 rounded-lg transition-colors"
          >
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-background/95 backdrop-blur-xl p-8 z-60 shadow-2xl md:hidden border-l border-border"
        >
          <div className="flex justify-end items-center mb-10">
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-surface rounded-full transition-colors text-foreground"
            >
              <HiX size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href} onClick={() => setIsOpen(false)}>
                <Link
                  href={l.href}
                  className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {!user && (
              <div className="flex flex-col gap-4 mt-8">
                <Button
                  className="bg-accent text-accent-foreground font-bold"
                  fullWidth
                  size="lg"
                >
                  Join Now
                </Button>
                <Button
                  variant="bordered"
                  fullWidth
                  size="lg"
                  className="border-border text-foreground font-bold"
                >
                  Login
                </Button>
              </div>
            )}
          </ul>
        </motion.div>
      </motion.nav>

      <div className="h-18"></div>
    </header>
  );
};

export default Navbar;
