import DataDiri from "@/components/form/DataDiri";
import Instruksi from "@/components/form/Instruksi";
import Kuisioner from "@/components/form/Kuisioner";
import Header from "@/components/Header";
import { fetchStatements } from "@/lib/statements/data";

export default async function Page() {
  const statements = await fetchStatements();
  return (
    <>
      <div className="flex flex-col mx-20 align-middle">
        <div className="flex justify-center items-center flex-col mb-4">
          <Header title="Form Kuisioner" />
          <Instruksi />
        </div>
        <DataDiri />
        <Kuisioner statements={statements} />
      </div>
    </>
  );
}
