import Header from "@/components/Header";
import { fetchUsers } from "@/lib/users/data";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";

export default async function Page() {
  const users = await fetchUsers();
  return (
    <>
      <Header title="Daftar Responden" showButton="hidden" />
      <div className={`bg-white rounded-xl sm:px-6 px-4 sm:mb-8 mb-40`}>
        <div className="flex">
          <h1 className="sm:text-2xl text-xl font-semibold text-slate-900 opacity-75 mr-4">
            Tabel Responden
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead>
              <tr className="bg-slate-200">
                <th className="text-left p-4 text-slate-900">No</th>
                <th className="text-left p-4 text-slate-900">NIM</th>
                <th className="text-left p-4 text-slate-900">Nama Lengkap</th>
                <th className="text-left p-4 text-slate-900">Jurusan</th>
                <th className="text-left p-4 text-slate-900">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index} className="border-b-2 border-slate-100">
                  <td className="p-4 text-slate-900">{index + 1}</td>
                  <td className="p-4 text-slate-900 sm:text-wrap text-nowrap">
                    {item.nim}
                  </td>
                  <td className="p-4 text-slate-900 sm:text-wrap text-nowrap">
                    {item.nama_lengkap}
                  </td>
                  <td className="p-4 text-slate-900 text-nowrap sm:text-wrap">
                    {item.jurusan}
                  </td>
                  <td className="p-4 text-slate-900">
                    <Link
                      href={`/responden/${item.id}/jawaban`}
                      className="bg-green-600 p-2 rounded-lg opacity-85 font-medium text-slate-600 flex justify-center items-center hover:transition-all hover:scale-110 sm:mb-2"
                    >
                      <FaEye className="text-white mr-2" />
                      <p className="text-white font-semibold">Jawaban</p>
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
