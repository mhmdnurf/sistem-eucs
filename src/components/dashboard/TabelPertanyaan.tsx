import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";
export default function TabelPernyataan() {
  return (
    <>
      <div className="bg-white rounded-xl sm:p-6 sm:mb-8">
        <div className="flex">
          <h1 className="sm:text-2xl sm:font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Pernyataan
          </h1>
          <Link
            href=""
            className="bg-slate-100 sm:p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110"
          >
            Lihat semua
          </Link>
        </div>
        <table className="w-full mt-6">
          <thead>
            <tr className="bg-slate-200">
              <th className="text-left p-4 text-slate-900">No</th>
              <th className="text-left p-4 text-slate-900">Pernyataan</th>
              <th className="text-left p-4 text-slate-900">Variabel</th>
              <th className="text-left p-4 text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-100">
              <td className="p-4 text-slate-900">1</td>
              <td className="p-4 text-slate-900">
                Saya merasa nyaman dengan suas
              </td>
              <td className="p-4 text-slate-900">Content</td>
              <td className="p-4 text-slate-900 flex">
                <Link
                  href={""}
                  className="flex justify-center items-center mr-2 bg-amber-200 sm:p-2 rounded-lg"
                >
                  <FaPencil className="text-yellow-800 mr-2" />
                  <span className="text-yellow-800">Ubah</span>
                </Link>
                <Link
                  href={""}
                  className="flex justify-center items-center rounded-lg bg-red-400 sm:p-2"
                >
                  <FaTrash className="text-red-800 mr-2" />
                  <span className="text-red-800">Hapus</span>
                </Link>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="p-4 text-slate-900">2</td>
              <td className="p-4 text-slate-900">
                Saya merasa nyaman dengan suas
              </td>
              <td className="p-4 text-slate-900">Accuracy</td>
              <td className="p-4 text-slate-900 flex">
                <Link
                  href={""}
                  className="flex justify-center items-center mr-2 bg-amber-200 sm:p-2 rounded-lg"
                >
                  <FaPencil className="text-yellow-800 mr-2" />
                  <span className="text-yellow-800">Ubah</span>
                </Link>
                <Link
                  href={""}
                  className="flex justify-center items-center rounded-lg bg-red-400 sm:p-2"
                >
                  <FaTrash className="text-red-800 mr-2" />
                  <span className="text-red-800">Hapus</span>
                </Link>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="p-4 text-slate-900">3</td>
              <td className="p-4 text-slate-900">
                Saya merasa nyaman dengan suas
              </td>
              <td className="p-4 text-slate-900">Format</td>
              <td className="p-4 text-slate-900 flex">
                <Link
                  href={""}
                  className="flex justify-center items-center mr-2 bg-amber-200 sm:p-2 rounded-lg"
                >
                  <FaPencil className="text-yellow-800 mr-2" />
                  <span className="text-yellow-800">Ubah</span>
                </Link>
                <Link
                  href={""}
                  className="flex justify-center items-center rounded-lg bg-red-400 sm:p-2"
                >
                  <FaTrash className="text-red-800 mr-2" />
                  <span className="text-red-800">Hapus</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
