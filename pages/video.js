import 'tailwindcss/tailwind.css'

import Navbar from "../components/Navbar";

export default function Videos({ instance, searchQuery, video }) {
  return (
    <div className="dark flex flex-col">
      <Navbar searchQuery={searchQuery}/>
      <div className="dark flex flex-row justify-center my-5">
        <div className="flex flex-col space-y-5 w-fit">
          <a href={`https://youtube.com/watch?v=${video.videoId}`}>Test</a>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=1200'
  )

  let instances = await fetch("https://api.invidious.io/instances.json?pretty=1&sort_by=api,users,type");
  instances = await instances.json()
  instances = await instances.map(instance => (instance[1].api && instance[1].type === "https") ? instance[0]: null).filter(value => value !== null);
  
  let video;
  for (var instance of instances) {
    video = await fetch(`https://${instance}/api/v1/videos/${query.id}`);
    if (video.status === 200) {
      break;
    }
  }

  video = await video.json();

  return { props: { instance: instances[0], searchQuery: query.q || "", video } };
}

//yarn add react-spectrum
//yarn add next-transpile-modules