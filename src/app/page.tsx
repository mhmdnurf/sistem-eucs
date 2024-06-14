// import BigCard from "@/components/dashboard/BigCard";
// import TabelPernyataan from "@/components/dashboard/TabelPertanyaan";
// import Header from "@/components/Header";
import { fetchStatementsWithLimit } from "@/lib/statements/data";
import Dashboard from "./(admin)/page";

export default async function Home() {
  const statements = await fetchStatementsWithLimit();
  return (
    <>
      <Dashboard />
    </>
  );
}
