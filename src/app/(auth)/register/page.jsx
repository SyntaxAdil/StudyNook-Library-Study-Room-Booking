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
import { FiLoader, FiUserPlus } from "react-icons/fi";
import { authClient, signInGoogle } from "../../../lib/auth/auth-client";

const Register = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const { email, name, image, password } = Object.fromEntries(formdata.entries());
    setIsPending(true);
    try {
      await authClient.signUp.email(
        { email, password, name, image, callbackURL: "/" },
        {
          onSuccess: () => {
            toast.success("Registration Successful");
            router.push("/login");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Registration Failed");
          },
        }
      );
    } finally {
      setIsPending(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInGoogle();
      toast.success("Register successful with Google");
      setTimeout(() => router.push("/"), 1000);
    } catch (error) {
      toast.error("Register failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 py-10 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        <div className="bg-surface p-8 rounded-2xl shadow-surface-shadow border border-border backdrop-blur-md">
          
          <div className="text-center mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-xl text-accent-foreground mb-4 shadow-lg"
            >
              <FaBookReader size={28} />
            </motion.div>
            <h3 className="text-2xl font-bold tracking-tight">Join StudyNook</h3>
            <p className="text-muted text-sm mt-2">Start booking quiet rooms today.</p>
          </div>

          <Form className="grid grid-cols-1 gap-5" onSubmit={onSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                isRequired
                name="name"
                type="text"
                validate={(v) => !/^[a-zA-Z\s'-]{2,50}$/.test(v) ? "Invalid name" : null}
              >
                <Label className="text-sm font-semibold mb-1">Full Name</Label>
                <Input placeholder="Abdur Rahman" className="bg-field-background" />
                <FieldError className="text-danger text-xs mt-1" />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
                validate={(v) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v) ? "Invalid email" : null}
              >
                <Label className="text-sm font-semibold mb-1">Email</Label>
                <Input placeholder="adil@example.com" className="bg-field-background" />
                <FieldError className="text-danger text-xs mt-1" />
              </TextField>
            </div>

            <TextField
              isRequired
              name="image"
              type="text"
              validate={(v) => /\.(?:jpe?g|png|gif|svg|webp)$/i.test(v) ? "Invalid URL" : null}
            >
              <Label className="text-sm font-semibold mb-1">Photo URL</Label>
              <Input placeholder="https://image-link.com/photo.jpg" className="bg-field-background" />
              <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
              validate={(v) => {
                if (v.length < 8) return "Min 8 characters";
                if (!/[A-Z]/.test(v)) return "Need 1 uppercase";
                if (!/[0-9]/.test(v)) return "Need 1 number";
                return null;
              }}
            >
              <Label className="text-sm font-semibold mb-1">Password</Label>
              <Input placeholder="••••••••" className="bg-field-background" />
              <Description className="text-[10px] text-muted leading-tight">
                Min 8 chars, 1 uppercase, 1 number
              </Description>
              <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            <div className="flex flex-col gap-4 mt-2">
              <Button 
                type="submit" 
                className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-md shadow-md hover:opacity-90 transition-all"
                isDisabled={isPending}
              >
                {isPending ? (
                  <FiLoader className="animate-spin text-xl" />
                ) : (
                  <div className="flex items-center gap-2">
                    <FiUserPlus size={20} />
                    <span>Create Account</span>
                  </div>
                )}
              </Button>

              <div className="flex items-center gap-3">
                <Separator className="flex-1 bg-separator" />
                <span className="text-[10px] font-black text-muted uppercase tracking-widest">OR</span>
                <Separator className="flex-1 bg-separator" />
              </div>

              <Button
                onClick={handleGoogle}
                type="button"
                variant="bordered"
                className="w-full h-12 border-border hover:bg-default text-foreground font-medium rounded-md"
              >
                <FaGoogle className="text-blue-500" />
                Sign Up with Google
              </Button>
            </div>

            <p className="text-center text-sm text-muted">
              Already have an account?{" "}
              <Link className="font-bold text-link hover:underline" href={"/login"}>
                Log In
              </Link>
            </p>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;