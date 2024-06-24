import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import Pagination from "../responden/Pagination";

type TabelPertanyaan = {
  hidden?: string;
  marginTop?: string;
  paddingVertical?: string;
  statements: Statements[];
  totalPages: number;
  currentPage: number;
  ITEMS_PER_PAGE: number;
};

interface Statements {
  id: number;
  statement: string;
  variabel_id: string;
  nama_variabel: string;
}

export default async function TabelPertanyaan({
  hidden,
  marginTop,
  paddingVertical,
  statements,
  totalPages,
  currentPage,
  ITEMS_PER_PAGE,
}: TabelPertanyaan) {
  return (
    <>
      <div
        className={`bg-white rounded-xl sm:px-6 px-4 ${paddingVertical} sm:mb-8 mb-20`}
      >
        <div className={`flex ${hidden} mt-4 sm:mt-0`}>
          <h1 className="sm:text-2xl text-xl font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Pertanyaan
          </h1>
          <Link
            href="/statements"
            className={`bg-slate-100 p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 `}
          >
            Lihat semua
          </Link>
        </div>
        <Pagination totalPages={totalPages} />
        <div className="overflow-x-auto">
          <table className={`w-full ${marginTop} mt-4`}>
            <thead>
              <tr className="bg-slate-200">
                <th className="text-left p-4 text-slate-900">No</th>
                <th className="text-left p-4 text-slate-900">Pertanyaan</th>
                <th className="text-left p-4 text-slate-900">Variabel</th>
                <th className="text-left p-4 text-slate-900">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {statements.map((item, index) => (
                <tr key={index} className="border-b-2 border-slate-100">
                  <td className="p-4 text-slate-900">
                    {" "}
                    {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                  </td>
                  <td className="p-4 text-slate-900 sm:text-wrap text-nowrap">
                    {item.statement}
                  </td>
                  <td className="p-4 text-slate-900">
                    {item.nama_variabel.charAt(0).toUpperCase() +
                      item.nama_variabel.slice(1)}
                  </td>
                  <td className="p-4 text-slate-900">
                    <Link
                      href={`/statements/${item.id}/edit`}
                      className="bg-yellow-600 p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 sm:mb-2 "
                    >
                      <FaPencil className="text-white mr-2" />
                      <p className="text-white font-semibold">Edit</p>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
