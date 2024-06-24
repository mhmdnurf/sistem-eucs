"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Pagination = {
  totalPages?: number;
  hidePagination?: string;
};

export default function Pagination({ totalPages, hidePagination }: Pagination) {
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
      <div className={`flex space-x-4 sm:mt-4 mt-6 ${hidePagination}`}>
        {currentPage > 1 ? (
          <Link
            href={createPageURL(currentPage - 1)}
            className="sm:p-2 p-1 bg-blue-500 rounded-md w-24 text-center"
          >
            <span className="text-white font-semibold">Previous</span>
          </Link>
        ) : (
          <div className="flex justify-center items-center">
            <span className="text-gray-500 sm:w-24 w-16 sm:p-2 p-1 text-center font-semibold">
              Previous
            </span>
          </div>
        )}

        {currentPage < (totalPages || 0) ? (
          <Link
            href={createPageURL(currentPage + 1)}
            className="p-1 sm:p2 bg-blue-500 rounded w-24 text-center"
          >
            <span className="text-white font-semibold text-md">Next</span>
          </Link>
        ) : (
          <div className="flex justify-center items-center">
            <span className="p-1 sm:p2 text-gray-500 sm:w-24 w-16 text-center font-semibold">
              Next
            </span>
          </div>
        )}
      </div>
    </>
  );
}
