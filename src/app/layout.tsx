import type { Metadata } from "next";
import "./globals.css";
import { sourceCodePro } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "AlexFangSW",
  description: "Personal website of AlexFangSW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className}`}>{children}</body>
    </html>
  );
}
