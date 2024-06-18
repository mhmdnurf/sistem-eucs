import { countUsers } from "@/lib/users/data";

export default async function BigCard({ jumlah }: { jumlah: number }) {
  // const jumlah = await countUsers();
  return (
    <>
      <div className="sm:h-[300px] sm:mx-6 rounded-xl shadow-xl border bg-[url('/logo.jpeg')] bg-cover bg-center bg-no-repeat brightness-75">
        <div className="flex p-6 flex-col">
          <div className="">
            <h1 className="text-4xl font-semibold opacity-75">
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
