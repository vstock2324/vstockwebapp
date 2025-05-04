"use client";
import { Button, FileInput, Label, Textarea, TextInput } from "flowbite-react";
import { memo, useEffect, useState } from "react";
import VideoDisplay from "./VideoDisplay";
import supabase from "@/utils/supabase/supabaseBrowserClient";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditVideoForm = ({ videoId } ) => {
  const [video, setVideo] = useState();
  async function getVideoDetails() {
    try {
      const { data, error } = await supabase
        .from("video_details")
        .select("*")
        .eq("video_id", videoId);
      if (error) throw new Error(error.message);
      setVideo(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getVideoDetails();
  }, []);
  return (
    <form className="m-2 p-4  w-[80%] flex flex-col  gap-4 border-2  rounded-md border-gray-400">
      <div>
        <div>
          <Label
            className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400 my-2 block"
            htmlFor="videofile"
          >
            Re Upload Video File
          </Label>
          <VideoDisplay videoSrc="" />
          <FileInput
            required
            className="focus:outline-none border-none cursor-pointer"
            name="reuploadvideofile"
            sizing="lg"
          />
        </div>
        <div className="my-2 block">
          <Label
            className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          value={video?.name || ""}
          >
            Video Name
          </Label>
        </div>
        <TextInput
          value={video?.name}
          name="videoname"
          type="text"
          placeholder="Enter Video Name"
          required
        />
      </div>
      <div>
        <div className="my-2 block">
          <Label
            className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="videodescription"
          >
            Video Description
          </Label>
        </div>
        <Textarea
        value={video?.description}
          name="videodescription"
          placeholder="Enter Video Description"
          required
        />
      </div>
      <div className="flex flex-row my-2 items-center space-x-4">
        <Button
          className=" cursor-pointer w-[200px] focus:outline-none"
          type="submit"
        >
          {"Update"}
          {/* {pending ? "Updatting" : "Update"} */}
        </Button>
        <Button outline className="w-[200px]" type="reset">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default memo(EditVideoForm);
