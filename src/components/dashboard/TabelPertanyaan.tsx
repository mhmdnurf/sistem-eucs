import { fetchStatementsWithVariabel } from "@/lib/statements/data";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";

type TabelPertanyaan = {
  hidden?: string;
  marginTop?: string;
  paddingVertical?: string;
};

export default async function TabelPertanyaan({
  hidden,
  marginTop,
  paddingVertical,
}: TabelPertanyaan) {
  const statements = await fetchStatementsWithVariabel();

  return (
    <>
      <div className={`bg-white rounded-xl sm:px-6 ${paddingVertical} sm:mb-8`}>
        <div className={`flex ${hidden}`}>
          <h1 className="sm:text-2xl sm:font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Pertanyaan
          </h1>
          <Link
            href="/statements"
            className={`bg-slate-100 sm:p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 `}
          >
            Lihat semua
          </Link>
        </div>
        <table className={`w-full ${marginTop}`}>
          <thead>
            <tr className="bg-slate-200">
              <th className="text-left p-4 text-slate-900">No</th>
              <th className="text-left p-4 text-slate-900">Pertanyaan</th>
              <th className="text-left p-4 text-slate-900">Variabel</th>
              <th className="text-left p-4 text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {statements.map((statement, index) => (
              <tr key={index} className="border-b-2 border-slate-100">
                <td className="p-4 text-slate-900">{index + 1}</td>
                <td className="p-4 text-slate-900">{statement.statement}</td>
                <td className="p-4 text-slate-900">
                  {statement.nama_variabel.charAt(0).toUpperCase() +
                    statement.nama_variabel.slice(1)}
                </td>
                <td className="p-4 text-slate-900">
                  <Link
                    href={`/statements/${statement.id}/edit`}
                    className="bg-yellow-600 p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 sm:mb-2"
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
    </>
  );
}
