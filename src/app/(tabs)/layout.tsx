import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`center-container content-container`}>
      <Navbar />
      {children}
    </div>
  );
}
