"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBookReader } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { authClient, signInGoogle } from "../../lib/auth/auth-client";

const LoginWrapper = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const { email, password } = Object.fromEntries(formdata.entries());
    setIsPending(true);
    try {
      await authClient.signIn.email(
        { email, password, callbackURL: "/" },
        {
          onSuccess: () => {
            toast.success("Login Successful");
            router.push("/");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Login Failed");
          },
        },
      );
    } finally {
      setIsPending(false);
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          toast.success("Login successful with Google");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Login failed.");
        },
      },
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md "
      >
        <div className="bg-surface p-8 rounded-2xl shadow-surface-shadow border border-border backdrop-blur-md">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-xl text-accent-foreground mb-4 shadow-lg"
            >
              <FaBookReader size={28} />
            </motion.div>
            <h3 className="text-2xl font-bold tracking-tight">
              Login to StudyNook
            </h3>
            <p className="text-muted text-sm mt-2">
              Welcome back. Pick up where you left off.
            </p>
          </div>

          <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
            {/* Email Field */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(v) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                  ? "Invalid email"
                  : null
              }
            >
              <Label className="text-sm font-semibold mb-1 block">
                Email Address
              </Label>
              <Input
                placeholder="adil@example.com"
                className="bg-field-background text-field-foreground border-field-border focus:ring-2 ring-focus"
              />
              <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            {/* Password Field */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(v) => (v.length < 8 ? "Too short" : null)}
            >
              <Label className="text-sm font-semibold mb-1 block">
                Password
              </Label>
              <Input
                placeholder="••••••••"
                className="bg-field-background text-field-foreground"
              />
              <Description className="text-[10px] text-muted leading-relaxed">
                8+ characters, 1 uppercase, 1 number
              </Description>
              <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-[var(--radius)] shadow-md hover:opacity-90 transition-all"
                isDisabled={isPending}
              >
                {isPending ? (
                  <FiLoader className="animate-spin text-xl" />
                ) : (
                  <div className="flex items-center gap-2">
                    <HiOutlineLogin size={20} />
                    <span>Log In</span>
                  </div>
                )}
              </Button>

              <div className="flex items-center gap-3">
                <Separator className="flex-1 bg-separator" />
                <span className="text-[10px] font-black text-muted uppercase tracking-tighter">
                  OR
                </span>
                <Separator className="flex-1 bg-separator" />
              </div>

              <Button
                onClick={handleGoogle}
                type="button"
                variant="bordered"
                className="w-full h-12 border-border hover:bg-default text-foreground font-medium rounded-[var(--radius)]"
              >
                <FaGoogle className="text-blue-500" />
                Continue with Google
              </Button>
            </div>

            {/* Footer Link */}
            <p className="text-center text-sm text-muted mt-2">
              New here?{" "}
              <Link
                className="font-bold text-link hover:underline underline-offset-4"
                href={"/register"}
              >
                Create an Account
              </Link>
            </p>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginWrapper;
