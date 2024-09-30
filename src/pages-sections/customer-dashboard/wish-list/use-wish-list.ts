import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useWishList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Destructure the array returned by useState to get both currentPage and setCurrentPage
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams?.get("page");
    return page ? +page : 1;
  });

  // HANDLE CHANGE PAGINATION
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  return { currentPage, handleChangePage };
}