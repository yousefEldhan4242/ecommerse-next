"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignInWithGoogle = () => {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
    >
      Sing In With google
    </button>
  );
};

export default SignInWithGoogle;
