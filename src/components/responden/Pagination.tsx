"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className="flex space-x-4 sm:mt-4">
        {currentPage > 1 ? (
          <Link
            href={createPageURL(currentPage - 1)}
            className="sm:p-2 bg-blue-500 rounded-md sm:w-24 text-center"
          >
            <span className="text-white font-semibold">Previous</span>
          </Link>
        ) : (
          <div className="flex justify-center items-center">
            <span className="text-gray-500 sm:w-24 text-center font-semibold">
              Previous
            </span>
          </div>
        )}

        {currentPage < totalPages ? (
          <Link
            href={createPageURL(currentPage + 1)}
            className="sm:p-2 bg-blue-500 rounded sm:w-24 text-center"
          >
            <span className="text-white font-semibold">Next</span>
          </Link>
        ) : (
          <div className="flex justify-center items-center">
            <span className="text-gray-500 sm:w-24 text-center font-semibold">
              Next
            </span>
          </div>
        )}
      </div>
    </>
  );
}
