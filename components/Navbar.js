import React from "react";
import { SearchIcon } from "@heroicons/react/solid"

export default function Navbar({ searchQuery }) {
  const [searchbarQuery, setSearchbarQuery] = React.useState(searchQuery || "");

  return (
    <>
      <div className="w-[100vw] h-12 bg-gray-100 border-b border-gray-200 flex flex-col justify-center">
        <div className="dark flex flex-row justify-center">
          <input className="rounded rounded-tr-none rounded-br-none ring-1 ring-gray-200 bg-white w-[684px] h-7 outline-none p-1" type="text" value={searchbarQuery} onInput={event => setSearchbarQuery(event.target.value)}/>
          <button className="rounded rounded-tl-none rounded-bl-none px-1 bg-blue-600 ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-800 active:bg-blue-800 duration-100 shadow-inner" onClick={() => window.location = `/search?q=${encodeURIComponent(searchbarQuery)}&p=1`}>
            <SearchIcon className="h-7 w-7 p-1 text-white"/>
          </button>
        </div>
      </div>
    </>
  )
}