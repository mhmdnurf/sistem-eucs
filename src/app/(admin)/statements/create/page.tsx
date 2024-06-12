import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header title="Tambah Pertanyaan" />
      <form action="#" className="mx-6 border-4 p-10 rounded-lg">
        <div className="flex flex-col">
          <label
            htmlFor="deskripsi"
            className="text-lg font-semibold text-slate-900 my-2"
          >
            Isi Pertanyaan
          </label>
          <input
            type="text"
            className="border-2 rounded-sm p-4 focus:ring-1 focus:outline-none focus:transform focus:ring-slate-300"
          />
          <label
            htmlFor="deskripsi"
            className="text-lg font-semibold text-slate-900 my-2"
          >
            Variabel
          </label>
          <select className="sm:p-4 bg-white border-2 rounded-sm focus:ring-1 focus:outline-none focus:transform focus:ring-slate-300">
            <option value="content">Content</option>
            <option value="accuracy">Accuracy</option>
            <option value="format">Format</option>
            <option value="eout">Ease of Use and Timeliness</option>
            <option value="kepuasan">Kepuasan Pengguna</option>
          </select>
          <button
            type="submit"
            className="mt-6 bg-slate-700 sm:p-4 rounded-lg focus:ring-4 focus:transform focus:ring-slate-300"
          >
            <span className="text-lg text-white font-semibold">Submit</span>
          </button>
        </div>
      </form>
    </>
  );
}
