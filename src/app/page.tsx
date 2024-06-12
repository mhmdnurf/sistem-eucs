import BigCard from "@/components/dashboard/BigCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="">
        <Header title="Dashboard" />
        <BigCard />
      </div>
    </>
  );
}
