"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { NoOutlineButtonBig } from "../shared/buttons";
import { StatusMessage } from "../shared/reusables";

/**
 * EmailForm component
 * 
 * This component renders a form with an input field for the user to enter their email address.
 * If the email address is valid, the form submits and the user is redirected to the /auth/verify page.
 * If the email address is invalid, an error message is displayed below the input field.
 * If the user has already submitted the form, a success or error message is displayed below the form.
 * 
 * @returns A JSX element representing the EmailForm component
 */
const EmailForm = () => {
  const [email, setEmail] = useState<string>(""); // Ensure email is a string
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      setIsEmailSent(false);
      setIsError(false);
      setLoading(true);
      const response = true;
      if (response) {
        setLoading(false);
        setIsEmailSent(true);
        router.replace("/auth/verify");
      } else {
        setLoading(false);
        setIsError(true);
      }
    } else {
      setError("Invalid email address. Please try again.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full p-4 bg-[#131621] border-2 border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-[##E0E0E0] focus:border-[#E0E0E0] sm:text-sm placeholder-[#464D67]"
          />
          {error && (
            <span className="text-red-500 text-left text-sm">{error}</span>
          )}
        </div>
        <NoOutlineButtonBig
          type="submit"
          name="Continue with Email"
          loading={loading}
        />
      </form>
      {isEmailSent === true && (
        <StatusMessage type="success" message="Email sent successfully!" />
      )}
      {isError === true && (
        <StatusMessage type="error" message="Error sending email. Try again!" />
      )}
    </>
  );
};

export default EmailForm;
