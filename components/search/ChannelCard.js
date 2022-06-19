import { BadgeCheckIcon } from "@heroicons/react/solid"

import { FormatNumber } from "../../js/utils"

export default function ChannelCard({ channel }) {
  return (
    <div className="ring-1 ring-gray-200 bg-gray-50 rounded flex flex-row w-[720px] max-w-[720px]">
      <div className="flex flex-col w-[615px] p-2 overflow-hidden">
        <a href={`/channel?id=${channel.authorId}`} className="hover:opacity-50 font-bold mb-2 duration-75">
          {channel.author} {channel.authorVerified ? <BadgeCheckIcon className="h-[21px] w-[21px] inline -mt-0.5"/>: ""}
        </a>

        <div className="h-[1px] bg-gray-200 mb-2"/>

        <div className="text-sm">{FormatNumber(channel.subCount)} Subscribers • {FormatNumber(channel.videoCount)} Videos • {channel.authorId}</div>
        
        <div className="text-sm mt-2 truncate">{channel.description}</div>
      </div>

      <a href={`/channel?id=${channel.authorId}`}>
        <img aspec className="rounded rounded-tl-none rounded-bl-none border-l border-gray-200" height="105px" width="105px" alt={`Channel Thumbnail`} src={`https:${channel.authorThumbnails[0].url.split("=")[0]}=s105-c-k-c0x00ffffff-no-rj-mo`}/>
      </a>
    </div>
  )
}