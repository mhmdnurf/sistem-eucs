import Link from "next/link";

interface Header {
  title: string;
  marginRight?: string;
  routeName?: string;
  showButton?: string;
  textColor?: string;
}

export default function Header({
  title,
  marginRight,
  routeName,
  showButton,
  textColor,
}: Header) {
  return (
    <>
      <div className="p-6 flex">
        <h1 className={`text-3xl font-semibold ${marginRight} ${textColor}`}>
          {title}
        </h1>
        <Link
          href={`${routeName}`}
          className={`bg-blue-100 sm:p-2 rounded-lg opacity-85 font-medium  flex justify-center items-center hover:transition-all hover:scale-110 ${showButton}`}
        >
          Kembali
        </Link>
      </div>
    </>
  );
}
