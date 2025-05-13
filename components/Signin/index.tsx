"use client";

import React, { useState } from "react";
import { Input, Button, Spacer } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { LinkIcon } from "@heroui/link";
import Link from "next/link";

const passwordRules = [
  {
    test: (pw: string) => pw.length >= 8,
    message: "Password must be at least 8 characters.",
  },
  {
    test: (pw: string) => /[A-Z]/.test(pw),
    message: "Password must contain at least one uppercase letter.",
  },
  {
    test: (pw: string) => /[a-z]/.test(pw),
    message: "Password must contain at least one lowercase letter.",
  },
  {
    test: (pw: string) => /\d/.test(pw),
    message: "Password must contain at least one number.",
  },
  {
    test: (pw: string) => /[!@#$%^&*(),.?\":{}|<>]/.test(pw),
    message: "Password must contain at least one special character.",
  },
];

const validatePassword = (pw: string) => {
  for (const rule of passwordRules) {
    if (!rule.test(pw)) return rule.message;
  }

  return "";
};

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ username: false, password: false });
  const router = useRouter();

  const usernameError =
    touched.username && !username ? "Username is required." : "";

  const passwordError =
    touched.password && !password
      ? "Password is required."
      : touched.password
        ? validatePassword(password)
        : "";

  const isFormValid = username && !validatePassword(password);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full h-full py-16 px-5 sm:px-8 xl:px-12 2xl:px-20">
      <div className="flex flex-col gap-5 items-center mb-20">
        <h1 className="text-2xl font-semibold">
          Welcome to Safaricom Partner Hub
        </h1>
        <h2 className="text-primary-theme text-xl font-semibold">
          Login to your account
        </h2>
      </div>
      <form
        className="flex flex-col gap-8 max-w-md lg:max-w-xs xl:max-w-md 2xl:max-w-lg mx-auto"
        style={{ width: "100%" }}
        onSubmit={handleLogin}
      >
        <Input
          fullWidth
          required
          errorMessage={usernameError}
          isInvalid={!!usernameError}
          label="Username"
          placeholder="Enter your username"
          value={username}
          onBlur={() => setTouched((t) => ({ ...t, username: true }))}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Input
          fullWidth
          required
          endContent={
            <Button
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          }
          errorMessage={passwordError}
          isInvalid={!!validatePassword(password)}
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          value={password}
          onBlur={() => setTouched((t) => ({ ...t, password: true }))}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Spacer y={0.5} />
        <Link className="ml-auto text-primary-theme" href="#">
          Forgot Password ?
        </Link>
        <Button fullWidth className="bg-primary-theme text-white" type="submit">
          <LinkIcon /> Login
        </Button>
      </form>
    </div>
  );
};

export default Signin;
