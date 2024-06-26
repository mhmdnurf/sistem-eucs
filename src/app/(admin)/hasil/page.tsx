import Header from "@/components/Header";
import { getAverageRating } from "@/lib/hasil/data";

export default async function Page() {
  const content = await getAverageRating();
  console.log(content);

  return (
    <>
      <Header title="Hasil Kuisioner" showButton="hidden" />
      <div className={`bg-white rounded-xl sm:px-6 px-4 py-2 sm:py-2 sm:mb-8`}>
        <div className="flex">
          <h1 className="sm:text-2xl text-xl font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Penilaian
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead>
              <tr className="bg-slate-200">
                <th className="text-center p-4 text-slate-900">No</th>
                <th className="text-center p-4 text-slate-900">Variabel</th>
                <th className="text-center p-4 text-slate-900">STS</th>
                <th className="text-center p-4 text-slate-900">TS</th>
                <th className="text-center p-4 text-slate-900">N</th>
                <th className="text-center p-4 text-slate-900">S</th>
                <th className="text-center p-4 text-slate-900">SS</th>
                <th className="p-4 text-slate-900 text-center sm:text-wrap text-nowrap">
                  Nilai Rata-Rata
                </th>
              </tr>
            </thead>
            <tbody>
              {content.map((item, index) => (
                <tr key={index} className="border-b-2 border-slate-100">
                  <td className="p-4 text-slate-900 text-center">
                    {index + 1}
                  </td>
                  <td className="p-4 text-slate-900 text-nowrap sm:text-wrap">
                    {String(item.nama_variabel)
                      .split(" ")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </td>
                  <td className="p-4 text-slate-900 text-center">{item.sts}</td>
                  <td className="p-4 text-slate-900 text-center">{item.ts}</td>
                  <td className="p-4 text-slate-900 text-center">{item.n}</td>
                  <td className="p-4 text-slate-900 text-center">{item.s}</td>
                  <td className="p-4 text-slate-900 text-center">{item.ss}</td>
                  <td className="p-4 text-slate-900 text-center">
                    {parseFloat(item.average_response).toFixed(2)}
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
