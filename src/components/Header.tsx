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
      <div className="sm:p-6 p-4 flex">
        <h1
          className={`sm:text-3xl text-2xl font-semibold ${marginRight} ${textColor}`}
        >
          {title}
        </h1>
        <Link
          href={`${routeName}`}
          className={`bg-blue-100 sm:p-2 px-2 rounded-lg opacity-85 font-medium  flex justify-center items-center hover:transition-all hover:scale-110 ${showButton}`}
        >
          <span className="text-sm">Kembali</span>
        </Link>
      </div>
    </>
  );
}
