import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mileston Business",
  description: "The new way to recieve crypto payments easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
