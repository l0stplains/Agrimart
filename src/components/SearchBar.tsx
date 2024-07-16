"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {

  const route = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;

    if (searchQuery) {
      route.replace(`?search=${searchQuery}`);
    }

  }

  return (
    <form action="" className="relative search-bar w-[min(100%,_300px)] flex justify-end " onSubmit={handleSubmit}>
      <input type="text" name="search" required placeholder="Search for products" className="rounded-full bg-[#D9D9D9] w-full px-4 py-1" />
      <button className="absolute right-0 search-button bg-green-100 rounded-full px-4 py-1 text-white font-bold" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
