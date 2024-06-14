"use client";

export default function DataDiri() {
  return (
    <>
      <div className="flex mb-12 flex-col">
        <h1 className="text-xl font-semibold text-center">
          Informasi Responden
        </h1>
        <div className="flex flex-col my-2">
          <label htmlFor="nama_lengkap" className="font-medium mb-2 text-lg">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama_lengkap"
            id="nama_lengkap"
            className="p-2 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="nim" className="font-medium mb-2 text-lg">
            NIM
          </label>
          <input
            type="text"
            name="nim"
            id="nim"
            className="p-2 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="jurusan" className="font-medium mb-2 text-lg">
            Jurusan
          </label>
          <input
            type="text"
            name="jurusan"
            id="jurusan"
            className="p-2 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
    </>
  );
}
