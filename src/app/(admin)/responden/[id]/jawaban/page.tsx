import Header from "@/components/Header";
import { getResponsesByUserId, getStatementById } from "@/lib/responses/data";
import Link from "next/link";
import { parse } from "path";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const responses = (await getResponsesByUserId(parseInt(id))) ?? [];
  const statements = await Promise.all(
    responses.map((response) => getStatementById(response.statement_id))
  );

  console.log(statements);

  return (
    <>
      <Header title="Daftar Jawaban" showButton="hidden" />
      <div className={`bg-white rounded-xl sm:px-6 sm:mb-8`}>
        <div className="flex">
          <h1 className="sm:text-2xl sm:font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Jawaban Responden
          </h1>
          <Link
            href="/responden"
            className={`bg-blue-100 sm:p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 `}
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
            {responses.map((response, index) => (
              <tr key={index} className="border-b-2 border-slate-100">
                <td className="p-4 text-slate-900">{index + 1}</td>
                <td className="p-4 text-slate-900">
                  {statements[index]?.statement}
                </td>
                <td className="p-4 text-slate-900">
                  {String(statements[index]?.nama_variabel)
                    .charAt(0)
                    .toUpperCase() +
                    String(statements[index]?.nama_variabel).slice(1)}
                </td>
                <td className="p-4 text-slate-900">{response.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
