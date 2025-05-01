"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { memo, useEffect, useRef, useState } from "react";

const VideoDisplay = ({ videoSrc }: { videoSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl,setVideoUrl]=useState(videoSrc);
  async function getVideoUrl(){
    console.log(videoSrc);
    const { data } = supabase
    .storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
    .getPublicUrl(videoSrc);
    setVideoUrl(data.publicUrl);
  }
  async function handleLoadedData(){
    if(!videoRef.current) return;
    videoRef.current.src=videoUrl;
  }
  function handleMouseEnter() {
    if (!videoRef.current) return;
    videoRef.current.play();
  }
  function handleMouseLeave() {
    if (!videoRef.current) return;
    videoRef.current.pause();
  }
  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement?.addEventListener("mouseenter", handleMouseEnter);
    videoElement?.addEventListener("mouseleave", handleMouseLeave);
    getVideoUrl();
    videoElement?.addEventListener("loadeddata",handleLoadedData);
    return () => {
      videoElement?.removeEventListener("mouseenter", handleMouseEnter);
      videoElement?.removeEventListener("mouseleave", handleMouseLeave);
      videoElement?.removeEventListener("loadeddata",handleLoadedData);
    };
  },[]);
  return (
    <video
    className="w-[200px] aspect-auto"
      muted
      ref={videoRef}
    ></video>
  );
};

export default memo(VideoDisplay);
