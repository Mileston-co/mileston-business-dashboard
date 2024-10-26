import type { Metadata } from "next";
import "../globals.css";
import { Card } from "@/components/shared/reusables";

export const metadata: Metadata = {
  title: "Auth",
  description: "The new way to recieve crypto payments easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0A0C13] text-white">
        <main className="h-screen flex items-center justify-center">
          <Card>{children}</Card>
        </main>
      </body>
    </html>
  );
}
