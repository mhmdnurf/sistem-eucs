import BigCard from "@/components/dashboard/BigCard";
import TabelPernyataan from "@/components/dashboard/TabelPertanyaan";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="">
        <Header title="Dashboard" />
        <BigCard />
        <TabelPernyataan />
      </div>
    </>
  );
}
