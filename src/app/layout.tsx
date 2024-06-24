"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import { usePathname } from "next/navigation";
import BottomNav from "@/components/BottomNav";

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
  const isFormPage = pathname === "/form";
  return (
    <html lang="en">
      <head>
        <title>Sistem EUCS SIPA</title>
      </head>
      <body className={poppins.className}>
        <div className="lg:flex">
          <SideNav hidden={isFormPage ? "hidden" : "lg:block"} />
          <div className="lg:h-full flex-grow overflow-auto">{children}</div>
          <div className="block lg:hidden">
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
