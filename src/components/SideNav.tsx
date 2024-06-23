"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaHouse,
  FaQuestion,
  FaPeopleGroup,
  FaChartPie,
  FaDna,
} from "react-icons/fa6";

type SideNav = {
  hidden: string;
};

export default function SideNav({ hidden }: SideNav) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href ? "bg-slate-200 shadow-sm" : "";
    }
    return pathname.startsWith(href) ? "bg-slate-200 shadow-sm" : "";
  };
  return (
    <div
      className={`bg-blue-500 border-r h-screen sticky top-0 ${hidden} hidden lg:block`}
    >
      <h1 className="text-center py-6 font-bold text-lg text-white">
        Sistem EUCS
      </h1>
      <nav className="w-[400px]">
        <ul>
          <li className={`sm:p-4 sm:mx-8 rounded-md sm:my-4 ${isActive("/")}`}>
            <Link href="/" className="flex justify-start items-center ">
              <FaHouse className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Home</span>
            </Link>
          </li>
          <li
            className={`sm:p-4 sm:mx-8 rounded-md sm:my-4 ${isActive(
              "/karakteristik"
            )}`}
          >
            <Link
              href="/karakteristik"
              className="flex justify-start items-center "
            >
              <FaDna className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Karakteristik</span>
            </Link>
          </li>
          <li
            className={`sm:p-4 sm:mx-8 rounded-md sm:my-4 ${isActive(
              "/statements"
            )}`}
          >
            <Link
              href="/statements"
              className="flex justify-start items-center "
            >
              <FaQuestion className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Pertanyaan</span>
            </Link>
          </li>
          <li
            className={`sm:p-4 sm:mx-8 rounded-md sm:my-4 ${isActive(
              "/responden"
            )}`}
          >
            <Link
              href="/responden"
              className="flex justify-start items-center "
            >
              <FaPeopleGroup className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Responden</span>
            </Link>
          </li>
          <li
            className={`sm:p-4 sm:mx-8 rounded-md sm:my-4 ${isActive(
              "/hasil"
            )}`}
          >
            <Link href="/hasil" className="flex justify-start items-center ">
              <FaChartPie className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Hasil</span>
            </Link>
          </li>{" "}
        </ul>
      </nav>
    </div>
  );
}
