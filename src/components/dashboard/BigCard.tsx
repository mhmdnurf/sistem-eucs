export default function BigCard() {
  return (
    <>
      <div className="bg-sky-200 sm:h-[300px] sm:mx-6 rounded-lg">
        <div className="flex p-6 flex-col">
          <div>
            <h1 className="text-4xl font-semibold text-slate-900 opacity-75">
              Selamat datang kembali,
            </h1>
            <h1 className="text-2xl font-semibold text-slate-900 opacity-75">
              Admin!
            </h1>
          </div>
          <div className="sm:mt-24">
            <p className="text-xl opacity-75">Jumlah Responden:</p>
            <p className="text-4xl font-bold opacity-75">100 Orang</p>
          </div>
        </div>
      </div>
    </>
  );
}