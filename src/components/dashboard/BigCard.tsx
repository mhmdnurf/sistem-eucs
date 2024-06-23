import { countUsers } from "@/lib/users/data";

export default async function BigCard({ jumlah }: { jumlah: number }) {
  return (
    <>
      <div className="sm:h-[300px] sm:mx-6 mx-4 rounded-xl shadow-sm border bg-[url('/logo.jpeg')] bg-center bg-no-repeat brightness-95">
        <div className="flex p-6 flex-col">
          <div className="">
            <h1 className="sm:text-4xl text-2xl font-semibold opacity-75">
              Selamat datang kembali,
            </h1>
            <h1 className="text-2xl font-semibold opacity-75">Admin!</h1>
          </div>
          <div className="sm:mt-24">
            <p className="text-xl opacity-75">Jumlah Responden:</p>
            <p className="text-4xl font-bold opacity-75">{jumlah} Orang</p>
          </div>
        </div>
      </div>
    </>
  );
}
