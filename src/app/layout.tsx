import type { Metadata } from "next";
import "./globals.css";
import { sourceCodePro } from "@/utils/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <GoogleAnalytics gaId={"G-5TL996L6VX"} />
      <body className={`${sourceCodePro.className}`}>{children}</body>
    </html>
  );
}
