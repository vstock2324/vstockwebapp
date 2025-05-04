"use client";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { memo, useActionState } from "react";
import SelectCategory from "./SelectCategory";
import SelectTags from "./SelectTags";
import SelectLicense from "./SelectLicense";
import SelectOrientation from "./SelectOrientation";
import { handleVectorFormSubmit } from "@/actions/admin/dashboard/vectors";
import VectorJPEGFileUpload from "./VectorJPEGFileUpload";
import VectorSVGFileUpload from "./VectorSVGFileUpload";
import VectorAIFileUpload from "./VectorAIFileUpload";
const initialState = {
  vectorname: undefined,
  vectordescription: undefined,
  vectorcategories: undefined,
  vectortags: undefined,
  vectorlicense: undefined,
  vectororientation: undefined,
  vectorjpegfile:undefined,
  vectorsvgfile:undefined,
  vectoraifile:undefined
};

const NewVectorForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, action, pending] = useActionState(
    handleVectorFormSubmit,
    initialState
  );
  return (
    <form
      action={action}
      className="mx-2 my-2 p-4 w-full flex-col  gap-4 border-2  rounded-md border-gray-400"
    >
      <div>
        <div className="my-2 block">
          <Label
            className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="vectorname"
          >
            Vector Name
          </Label>
        </div>
        <TextInput
        className="w-[80%]"
          id="vectorname"
          name="vectorname"
          type="text"
          placeholder="Enter Vector Name"
          required
        />
      </div>
      <div>
        <div className="my-2 block">
          <Label
            className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="vectordescription"
          >
            Vector Description
          </Label>
        </div>
        <Textarea
        className="h-[120px] resize-none w-[80%]"
          id="vectordescription"
          name="vectordescription"
          placeholder="Enter Vector Description"
          required
        />
      </div>
      <div>
        <div className="my-2 block">
          <Label
            className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="selectcategory"
          >
            Select Category
          </Label>
        </div>
        <SelectCategory />
      </div>
      <div>
        <div className="my-2 block">
          <Label
            className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="selecttags"
          >
            Select Tags
          </Label>
        </div>
        <SelectTags />
      </div>
      <div>
        <div className="my-2 block">
          <Label
            className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="selectlicense"
          >
            License
          </Label>
        </div>
        <SelectLicense />
      </div>

      <div>
        <div className="my-2 block">
          <Label
            className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="selectorientation"
          >
            Orientation
          </Label>
        </div>
        <SelectOrientation />
        <VectorJPEGFileUpload/>
        <VectorSVGFileUpload/>
        <VectorAIFileUpload/>
      </div>
      <div className="flex flex-row my-2 items-center space-x-4">
        <Button
          className={`${pending ? "cursor-wait" : "cursor-pointer"} w-[200px]`}
          disabled={pending}
          type="submit"
        >
          {pending ? "Submitting" : "Submit"}
        </Button>
        <Button outline className="w-[200px]  cursor-pointer" type="reset">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default memo(NewVectorForm);
