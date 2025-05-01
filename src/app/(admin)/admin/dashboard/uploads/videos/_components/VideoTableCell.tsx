"use client";
import { TableCell } from "flowbite-react";
import { memo, useRef } from "react";

type VideoTableCellPropType = {
    videoFullPath: string;
}

const VideoTableCell = ({props}:{props:VideoTableCellPropType}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  function handleVideoPlay() {
    if (!videoRef.current) return;
    videoRef.current.play();
  }
  function handleVideoPause() {
    if (!videoRef.current) return;
    videoRef.current.pause();
  }
  function handleVideoDownload(){
    if (!videoRef.current) return;
    const videoSrc = videoRef.current.src;
    const link = document.createElement("a");
    link.href = videoSrc;
    link.download = "video.mp4"; // Set the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <TableCell className="w-[300px] text-center">
      <video
      className="w-[250px] aspect-auto cursor-pointer rounded-md"
        ref={videoRef}
        onMouseLeave={handleVideoPause}
        onMouseEnter={handleVideoPlay}
        onClick={handleVideoDownload}
        controls={false}
        muted
        src={`${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_PATH}/${props.videoFullPath}`}
        onContextMenu={(e) => {
          e.preventDefault();
          return false;
        }}
      ></video>
    </TableCell>
  );
};

export default memo(VideoTableCell);
