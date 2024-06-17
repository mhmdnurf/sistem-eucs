import Header from "@/components/Header";
import { getAverageRating } from "@/lib/hasil/data";

export default async function Page() {
  // Fetch the average content data from your database
  const content = await getAverageRating();
  console.log(content);

  return (
    <>
      <Header title="Hasil Kuisioner" showButton="hidden" />
      <div className={`bg-white rounded-xl sm:px-6 sm:py-2 sm:mb-8`}>
        <div className="flex">
          <h1 className="sm:text-2xl sm:font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Penilaian
          </h1>
        </div>
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-slate-200">
              <th className="text-center p-4 text-slate-900">No</th>
              <th className="text-center p-4 text-slate-900">Variabel</th>
              <th className="p-4 text-slate-900 text-center">
                Nilai Rata-Rata
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, index) => (
              <tr key={index} className="border-b-2 border-slate-100">
                <td className="p-4 text-slate-900 text-center">{index + 1}</td>
                <td className="p-4 text-slate-900 text-center">
                  {String(item.nama_variabel).charAt(0).toUpperCase() +
                    String(item.nama_variabel).slice(1)}
                </td>
                <td className="p-4 text-slate-900 text-center">
                  {parseFloat(item.average_response)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
