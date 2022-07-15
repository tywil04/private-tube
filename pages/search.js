import React from "react";

import { useRouter } from 'next/router';

import 'tailwindcss/tailwind.css'

import Navbar from "../components/Navbar";
import VideoCard from "../components/search/VideoCard";
import ChannelCard from "../components/search/ChannelCard";

export default function SearchPage({ instance, searchQuery, searchPage, searchResult }) {
  const router = useRouter();

  return (
    <div className="dark flex flex-col">
      <Navbar searchQuery={searchQuery}/>
      <div className="dark flex flex-row justify-center my-5">
        {searchQuery ?
        <div className="flex flex-col space-y-5 w-fit">
          {searchResult.map(result => 
            <>
              {result.type === "video" ?
                <VideoCard instance={instance} video={result}/>
              :
                <ChannelCard channel={result}/>
              }
            </>
          )}
          <button onClick={() => {

            router.replace(`/search?q=${encodeURIComponent(searchQuery)}&p=${parseInt(searchPage) + 1}`);
          }}>Load more</button>
        </div>  
        :
        <p>Nothing to display here</p>
        }
      </div>
    </div>
  )
}

export async function getServerSideProps({ query, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=60'
  )

  let instances = await fetch("https://api.invidious.io/instances.json?pretty=1&sort_by=api,users,type");
  instances = await instances.json()
  instances = await instances.map(instance => (instance[1].api && instance[1].type === "https") ? instance[0]: null).filter(value => value !== null);
  
  let searchResult;
  for (var instance of instances) {
    searchResult = await fetch(`https://${instance}/api/v1/search?q=${encodeURIComponent(query.q)}&page=${query.p || 1}`);
    if (searchResult.status === 200) {
      break;
    }
  }

  searchResult = await searchResult.json()

  return { props: { instance: instances[0], searchQuery: query.q || null, searchPage: query.p || 1, searchResult } };
}