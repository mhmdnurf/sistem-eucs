import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { FaHouse, FaQuestion, FaPeopleGroup } from "react-icons/fa6";
export default function SideNav() {
  return (
    <div className="sm:w-[400px] bg-white sm:h-screen border">
      <h1 className="text-center py-6 font-semibold text-lg text-slate-700">
        Sistem EUCS
      </h1>
      <nav>
        <ul>
          <li className="bg-slate-100 sm:p-4 sm:mx-8 rounded-md shadow-sm sm:my-4">
            <Link
              href="/statements"
              className="flex justify-start items-center "
            >
              <FaHouse className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Home</span>
            </Link>
          </li>
          <li className="sm:p-4 sm:mx-8 rounded-md shadow-sm sm:my-4">
            <Link
              href="/statements"
              className="flex justify-start items-center "
            >
              <FaQuestion className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Pertanyaan</span>
            </Link>
          </li>
          <li className="sm:p-4 sm:mx-8 rounded-md shadow-sm sm:my-4">
            <Link
              href="/statements"
              className="flex justify-start items-center "
            >
              <FaPeopleGroup className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Responden</span>
            </Link>
          </li>
          <li className="sm:p-4 sm:mx-8 rounded-md shadow-sm sm:my-4">
            <Link
              href="/statements"
              className="flex justify-start items-center "
            >
              <FaSignOutAlt className="sm:mr-4 text-slate-800" />
              <span className="text-slate-800 font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
