"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ items }: { items: number }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || "1";

  const ITEM_PER_PAGE = 2;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) <= 0;
  const hasNext =
    ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE > items - 1;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", `${parseInt(page) - 1}`)
      : params.set("page", `${parseInt(page) + 1}`);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between items-center mt-3 py-2 px-4">
      <button
        onClick={() => handleChangePage("prev")}
        disabled={hasPrev}
        className="bg-white text-primary disabled:cursor-not-allowed disabled:bg-secondary disabled:text-white py-1 px-2 text-sm"
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage("next")}
        disabled={hasNext}
        className="bg-white text-primary disabled:cursor-not-allowed disabled:bg-secondary disabled:text-white  py-1 px-2 text-sm"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
