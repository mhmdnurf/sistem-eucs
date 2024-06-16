"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaHouse,
  FaQuestion,
  FaPeopleGroup,
  FaChartPie,
} from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

type SideNav = {
  hidden: string;
};

export default function SideNav({ hidden }: SideNav) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? "bg-slate-200 shadow-sm" : "";

  return (
    <div className={`bg-white border-r h-screen sticky top-0 ${hidden}`}>
      <h1 className="text-center py-6 font-semibold text-lg text-slate-700">
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
          </li>
          <li
            className={`sm:p-4 sm:mx-8 rounded-md sm:my-4 ${isActive(
              "/logout"
            )}`}
          >
            <Link href="/logout" className="flex justify-start items-center ">
              <FaSignOutAlt className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
