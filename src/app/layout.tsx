"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import { usePathname, useRouter } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNav = pathname === "/form" ? "hidden" : "";
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex">
          <SideNav hidden={hideNav} />
          <div className="h-full flex-grow overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
