import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Timesheet AB",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex h-">
          <SideBar />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
