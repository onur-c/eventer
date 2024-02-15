"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Type any city..."
        className="placeholder:text-center text-center text-white/90 text-sm outline-none rounded-md w-2/3 h-12 bg-[#4e5056] p-4"
        type="text"
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
