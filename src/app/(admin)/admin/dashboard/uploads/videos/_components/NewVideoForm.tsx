"use client";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React, { memo, useActionState } from "react";
import VideoFileUpload from "./VideoFileUpload";
import { handleNewVideoSubmitForm } from "@/actions/admin/dashboard/videos";

const initialState = {
  videoname: undefined,
  videodescription: undefined,
  videofile: undefined,
};

const NewVideoForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, action, pending] = useActionState(
    handleNewVideoSubmitForm,
    initialState
  );
  
  return (
    <form
      action={action}
      className="mx-2 my-2 p-4  w-[80%] flex flex-col  gap-4 border-2  rounded-md border-gray-400"
    >
      <div>
        <div className="my-2 block">
          <Label
            className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="videoname"
          >
            Video Name
          </Label>
        </div>
        <TextInput
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
          name="videodescription"
          placeholder="Enter Video Description"
          required
        />
      </div>
      <div>
        <VideoFileUpload />
      </div>
      <div className="flex flex-row my-2 items-center space-x-4">
        <Button
          className={`${
            pending ? "cursor-wait" : "cursor-pointer"
          } w-[200px] focus:outline-none`}
          disabled={pending}
          type="submit"
        >
          {pending ? "Submitting" : "Submit"}
        </Button>
        <Button outline className="w-[200px]" type="reset">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default memo(NewVideoForm);
