"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);

    if (e.target?.value) {
      params.set("q", e.target.value);
      params.set("page", "1");

    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div>
      <input
        type="text"
        placeholder="Search For User..."
        className="bg-secondary py-2 px-3 rounded-lg focus-visible:outline-none text-sm"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
