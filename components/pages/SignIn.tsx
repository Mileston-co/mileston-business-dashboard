"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import EmailForm from "@/components/forms/EmailFom";

/**
 * SignInPage component
 *
 * This component renders a page that allows the user to sign in to their
 * Mileston account. The page includes a form to enter an email address and a
 * Google login button. The page also renders a link to the Terms of Service
 * and Privacy Policy.
 *
 * If the user provides a callbackUrl query parameter, the component will
 * attempt to update the callbackUrl in the database before rendering the page.
 *
 */
export default function SignInPage() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-[32px]">Sign to your Account</h1>
      <p className="font-regular text-[16px]">
        Enter your email address to continue to Mileston
      </p>
      <EmailForm />
      <p className="text-[16px] p-5 font-regular">
        By clicking continue, you agree to our{" "}
        <span className="text-[#263382]"> Terms of Service </span> and{" "}
        <span className="text-[#263382]"> Privacy Policy </span>
      </p>
    </div>
  );
}
