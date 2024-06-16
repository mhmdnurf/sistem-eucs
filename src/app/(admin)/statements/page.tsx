import TabelPertanyaan from "@/components/dashboard/TabelPertanyaan";
import Header from "@/components/Header";
import { fetchStatementsWithVariabel } from "@/lib/statements/data";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Header title="Pertanyaan" />
      <Link
        href={"/statements/create"}
        className="flex mb-2 sm:px-6 sm:py-4 rounded-lg sm:mx-6 bg-green-600 w-fit "
      >
        <span className="text-white text-md font-semibold">
          Tambah Pertanyaan
        </span>
      </Link>
      <TabelPertanyaan hidden="hidden" />
    </>
  );
}
