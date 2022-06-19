import React from "react";
import { SearchIcon } from "@heroicons/react/solid"

export default function Navbar({ searchQuery }) {
  const [searchbarQuery, setSearchbarQuery] = React.useState(searchQuery || "");

  return (
    <>
      <div className="w-[100vw] h-12 bg-gray-50 border-b border-gray-200 flex flex-col justify-center">
        <div className="dark flex flex-row justify-center">
          <input className="rounded rounded-tr-none rounded-br-none ring-1 ring-gray-200 bg-white w-[684px] h-7 outline-none p-1" type="text" value={searchbarQuery} onInput={event => setSearchbarQuery(event.target.value)}/>
          <button className="rounded rounded-tl-none rounded-bl-none px-1 bg-blue-500 ring-1 ring-blue-600" onClick={() => window.location = `/search?q=${encodeURIComponent(searchbarQuery)}&p=1`}>
            <SearchIcon className="h-7 w-7 p-1 text-white"/>
          </button>
        </div>
      </div>
    </>
  )
}