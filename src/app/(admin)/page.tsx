import BigCard from "@/components/dashboard/BigCard";
import TabelPernyataan from "@/components/dashboard/TabelPertanyaan";
import Header from "@/components/Header";
import {
  fetchStatements,
  fetchStatementsWithLimit,
} from "@/lib/statements/data";

export default async function Dashboard() {
  const statements = await fetchStatementsWithLimit();
  return (
    <>
      <Header title="Dashboard" />
      <BigCard />
      <TabelPernyataan
        marginTop="sm:mt-6"
        paddingVertical="sm:py-6"
        statements={statements}
      />
    </>
  );
}
