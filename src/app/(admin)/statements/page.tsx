import TabelPertanyaan from "@/components/dashboard/TabelPertanyaan";
import Header from "@/components/Header";
import { fetchStatementsWithVariabel } from "@/lib/statements/data";
import Link from "next/link";

export default async function Page() {
  const statements = await fetchStatementsWithVariabel();
  return (
    <>
      <Header title="Pertanyaan" showButton="hidden" />
      <Link
        href={"/statements/create"}
        className="flex mb-2 sm:px-6 px-4 sm:py-4 py-2 rounded-lg sm:mx-6 mx-4 bg-green-600 w-fit"
      >
        <span className="text-white text-md font-semibold">
          Tambah Pertanyaan
        </span>
      </Link>
      <TabelPertanyaan hidden="hidden" statements={statements} />
    </>
  );
}
