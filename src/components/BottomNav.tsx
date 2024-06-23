import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaHouse,
  FaQuestion,
  FaPeopleGroup,
  FaChartPie,
  FaDna,
} from "react-icons/fa6";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
        ? "bg-slate-200 shadow-sm lg:p-0 py-2 px-4 rounded-lg"
        : "";
    }
    return pathname.startsWith(href)
      ? "bg-slate-200 shadow-sm lg:p-0 py-2 px-4 rounded-lg"
      : "";
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
      <nav className="flex justify-evenly items-center">
        <Link
          href="/"
          className={`flex flex-col items-center ${isActive("/")}`}
        >
          {/* <FaHouse className="text-slate-800" /> */}
          <span className="text-slate-800 font-medium text-sm">Home</span>
        </Link>
        <Link
          href="/karakteristik"
          className={`flex flex-col items-center ${isActive("/karakteristik")}`}
        >
          {/* <FaDna className="text-slate-800" /> */}
          <span className="text-slate-800 font-medium text-sm">
            Karakteristik
          </span>
        </Link>
        <Link
          href="/statements"
          className={`flex flex-col items-center ${isActive("/statements")}`}
        >
          {/* <FaQuestion className="text-slate-800" /> */}
          <span className="text-slate-800 font-medium text-sm">Pertanyaan</span>
        </Link>
        <Link
          href="/responden"
          className={`flex flex-col items-center ${isActive("/responden")}`}
        >
          {/* <FaPeopleGroup className="text-slate-800" /> */}
          <span className="text-slate-800 font-medium text-sm">Responden</span>
        </Link>
        <Link
          href="/hasil"
          className={`flex flex-col items-center ${isActive("/hasil")}`}
        >
          {/* <FaChartPie className="text-slate-800" /> */}
          <span className="text-slate-800 font-medium text-sm">Hasil</span>
        </Link>
      </nav>
    </div>
  );
}
