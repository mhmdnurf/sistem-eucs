import BigCard from "@/components/dashboard/BigCard";
import TabelPernyataan from "@/components/dashboard/TabelPertanyaan";
import Header from "@/components/Header";
import { fetchStatementsWithLimit } from "@/lib/statements/data";
import { countUsers } from "@/lib/users/data";

export default async function Home() {
  const [jumlah, statements] = await Promise.all([
    countUsers(),
    fetchStatementsWithLimit(),
  ]);
  return (
    <>
      <Header title="Dashboard" showButton="hidden" />
      <BigCard jumlah={jumlah} />
      <TabelPernyataan
        marginTop="sm:mt-6"
        paddingVertical="sm:py-6"
        statements={statements}
      />
    </>
  );
}
