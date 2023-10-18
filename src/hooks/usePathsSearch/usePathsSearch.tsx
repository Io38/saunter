import { useMemo, useState } from "react";
import { IUsePathsSearchParams } from "./types";
import { IPath } from "types";

const usePathsSearch = ({ paths }: IUsePathsSearchParams) => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredPaths = useMemo(() => {
    return paths.filter(({ title, fullDescription }: IPath) => {
      const path = `${title} ${fullDescription}`.toLowerCase();
      return path.includes(search.toLowerCase());
    });
  }, [paths, search]);

  return {
    filteredPaths,
    search,
    handleSearchChange,
  };
};

export default usePathsSearch;
