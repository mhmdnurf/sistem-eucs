import Header from "@/components/Header";
import { getResponsesByUserId, getStatementById } from "@/lib/responses/data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const responses = (await getResponsesByUserId(Number(id))) ?? [];
  const statements = await Promise.all(
    responses.map((response) => getStatementById(response.statement_id))
  );

  return (
    <>
      <Header title="Daftar Jawaban" showButton="hidden" />
      <div className={`bg-white rounded-xl sm:px-6 px-4 mb-2 sm:mb-8`}>
        <div className="flex items-center">
          <h1 className="sm:text-2xl text-xl font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Jawaban Responden
          </h1>
          <Link
            href="/responden"
            className={`bg-blue-100 p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 `}
          >
            Kembali
          </Link>
        </div>
        <table className="w-full mt-4 overflow-x-auto">
          <thead>
            <tr className="bg-slate-200">
              <th className="text-left p-4 text-slate-900">No</th>
              <th className="text-left p-4 text-slate-900">Statement</th>
              <th className="text-left p-4 text-slate-900">Variabel</th>
              <th className="text-left p-4 text-slate-900">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((item, index) => (
              <tr key={index} className="border-b-2 border-slate-100">
                <td className="p-4 text-slate-900">{index + 1}</td>
                <td className="p-4 text-slate-900 text-nowrap sm:text-wrap">
                  {statements[index]?.statement}
                </td>
                <td className="p-4 text-slate-900 text-nowrap sm:text-wrap">
                  {String(statements[index]?.nama_variabel)
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </td>
                <td className="p-4 text-slate-900">{item.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
