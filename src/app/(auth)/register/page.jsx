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
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBookReader, FaRegistered } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FiLoader, FiUserPlus } from "react-icons/fi";
import { authClient, signInGoogle } from "../../../lib/auth/auth-client";

const Register = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const { email, name, image, password } = Object.fromEntries(
      formdata.entries(),
    );
    setIsPending(true);
    try {
      await authClient.signUp.email(
        {
          email,
          password,
          name,
          image,
          callbackURL: "/",
        },

        {
          onSuccess: (ctx) => {
            toast.success("Register Successfull");
            router.push("/login");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Registration Failed");
          },
        },
      );
    } finally {
      setIsPending(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInGoogle();

      toast.success("Register successful with Google");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Register failed.");
    }
  };

  return (
    <div>
      <Form
        className="flex max-w-xl flex-col gap-4 mx-auto"
        onSubmit={onSubmit}
      >
        <div>
          <FaBookReader size={45} />
          <h3>Create a StudyNook Account</h3>
          <p>Start booking quiet rooms today.</p>
        </div>
        {/* Name */}
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (!/^[a-zA-Z\s'-]{2,50}$/.test(value)) {
              return "Please enter a valid name";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Abdur Rahman" />
          <FieldError />
        </TextField>

        {/* Photo URL */}
        <TextField
          isRequired
          name="image"
          type="text"
          validate={(value) => {
            if (/\.(?:jpe?g|png|gif|svg|webp)$/i.test(value)) {
              return "Please enter a valid photo url";
            }
            return null;
          }}
        >
          <Label>Photo URL</Label>
          <Input placeholder="https://..." />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="adil@example.com" />
          <FieldError />
        </TextField>
        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex flex-col gap-2 ">
          <Button type="submit" className={"w-full rounded-md"}>
            {!isPending && <FiUserPlus></FiUserPlus>}
            {isPending ? <FiLoader className="animate-spin" /> : "Register"}
          </Button>
          <div className="flex items-center gap-4 justify-center text-sm my-2 text-muted">
            <Separator className="w-60"></Separator>
            <span>OR</span>
            <Separator className="w-60"></Separator>
          </div>
          <Button
            onClick={handleGoogle}
            type="button"
            variant="secondary"
            className={"w-full rounded-md"}
          >
            <FaGoogle />
            Login with Google
          </Button>
        </div>

        <p className="text-center">
          Already have an account? <Link className="underline text-blue-600" href={"/login"}>Login</Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default Register;
