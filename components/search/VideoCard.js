import { FormatNumber } from "../../js/utils"

export default function VideoCard({ instance, video }) {
  return (
    <div className="ring-1 ring-gray-200 bg-gray-50 rounded flex flex-row max-w-[720px]">
      <a href={`/video?id=${video.videoId}`}>
        <img className="rounded rounded-tr-none rounded-br-none border-r border-gray-200 !w-[240px] !h-[135px]" alt={`Video Thumbnail`} height="135px" width="240px" src={video.videoThumbnails.filter(thumbnail => thumbnail.quality === "medium")[0].url}/>
      </a>
    
      <div className="flex w-[480px] h-[135px] flex-col p-2">
        <a href={`/video?id=${video.videoId}`} className="hover:opacity-50 font-bold mb-2 duration-75">{video.title}</a>

        <div className="h-[1px] bg-gray-200 mb-2"/>

        <div className="text-sm">{FormatNumber(video.viewCount)} Views • {video.publishedText} • {video.videoId}</div>

        <div className="flex flex-row mt-auto">
          <a className="text-sm hover:opacity-50 w-fit mr-auto duration-75 font-semibold" href={`/channel?id=${video.authorId}`}>{video.author}</a>
          
          <a className="text-sm hover:opacity-50 w-fit ml-auto duration-75" href={`https://www.youtube.com/watch?v=${video.videoId}`}>Youtube</a>
          <a className="text-sm hover:opacity-50 w-fit ml-2 duration-75" href={`https://${instance}/watch?v=${video.videoId}`}>Invidious</a>
        </div>
      </div>
    </div>
  )
}