"use client";

import { LoginForm } from "@/components/auth/LoginForm";
import { AuthLayout } from "@/components/auth/layout";
import { kdebug } from "@/constants";
import { LoginWithGithub, LoginWithGoogle } from "@/db/auth/login";
import React from "react";

const login = () => {

  return <AuthLayout image="/l.jpg">

    <LoginForm/>
  </AuthLayout>;
};

export default login;



