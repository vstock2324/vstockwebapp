"use client";
import { memo, useActionState } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { handleTagsFormSubmit } from "@/actions/admin/dashboard/tags";
const initialState = {
  tagname: undefined,
  tagdescription: undefined,
};

const NewTagsForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, action, pending] = useActionState(
    handleTagsFormSubmit,
    initialState
  );
  return (
    <form
      action={action}
      className="mx-2 my-2 p-4 w-full flex flex-col  gap-4 border-2  rounded-md border-gray-400"
    >
      <div>
        <div className="my-2 block">
          <Label 
          className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          htmlFor="vectorname">Tag Name</Label>
        </div>
        <TextInput
        className="w-[80%]"
          id="tagname"
          name="tagname"
          type="text"
          placeholder="Enter Category Name"
          required
        />
      </div>
      <div>
        <div className="my-2 block">
          <Label 
          className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          htmlFor="vectordescription">Tag Description</Label>
        </div>
        <Textarea
          id="tagdescription"
          name="tagdescription"
          className="w-[80%] h-[120px] resize-none"
          placeholder="Enter Category Description"
          required
        />
      </div>

      <div className="flex flex-row my-2 items-center space-x-4">
        <Button
          className={`${pending ? "cursor-wait" : "cursor-pointer"} w-[200px]`}
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

export default memo(NewTagsForm);
