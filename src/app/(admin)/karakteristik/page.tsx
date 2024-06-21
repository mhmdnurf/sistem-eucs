import Header from "@/components/Header";
import { countTiapJurusan } from "@/lib/users/data";

export default async function Karakteristik() {
  const jurusan = await countTiapJurusan();

  return (
    <div>
      <Header title="Karakteristik Responden" showButton="hidden" />
      <div className={`bg-white rounded-xl sm:px-6 sm:py-4 sm:mb-8`}>
        <div className={`flex`}>
          <h1 className="sm:text-2xl sm:font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Karakteristik
          </h1>
        </div>
        <table className={`w-full mt-6`}>
          <thead>
            <tr className="bg-slate-200">
              <th className="text-left p-4 text-slate-900">No</th>
              <th className="text-left p-4 text-slate-900">Jurusan</th>
              <th className="text-left p-4 text-slate-900">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {jurusan.map((item, index) => (
              <tr key={index} className="border-b-2 border-slate-100">
                <td className="p-4 text-slate-900">{index + 1}</td>
                <td className="p-4 text-slate-900">
                  {String(item.jurusan)
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </td>
                <td className="p-4 text-slate-900">{item.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
