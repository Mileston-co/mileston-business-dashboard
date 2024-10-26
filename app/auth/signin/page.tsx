"use client";

import SignInPage from "@/components/pages/SignIn";
import { Suspense } from "react";

/**
 * The sign in page of the Mileston wallet app.
 *
 * @returns The JSX Element for the sign in page.
 */
export default function Page() {
  return (
    <Suspense>
      <SignInPage />
    </Suspense>
  );
}
