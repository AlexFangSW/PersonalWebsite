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
  const gaID = process.env.GOOGLE_TAG_ID;
  if (!gaID) {
    throw Error("GOOGLE_TAG_ID not set");
  }
  return (
    <html lang="en">
      <GoogleAnalytics gaId={gaID} />
      <body className={`${sourceCodePro.className}`}>{children}</body>
    </html>
  );
}
