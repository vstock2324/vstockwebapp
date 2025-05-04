"use client";
import { memo, useActionState } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { handleCategoryFormSubmit } from "@/actions/admin/dashboard/category";
const initialState = {
  categoryname: undefined,
  categorydescription: undefined,
};

const NewCategoryForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, action, pending] = useActionState(
    handleCategoryFormSubmit,
    initialState
  );
  return (
    <form
      action={action}
      className="mx-2 my-2 p-4 w-full flex-col  gap-4 border-2  rounded-md border-gray-400"
    >
      <div>
        <div className="my-2 block">
          <Label className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
           htmlFor="categoryname">Category Name</Label>
        </div>
        <TextInput
        className="w-[80%]"
          id="categoryname"
          name="categoryname"
          type="text"
          placeholder="Enter Category Name"
          required
        />
      </div>
      <div>
        <div className="my-2 block">
          <Label className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="categorydescription">Category Description</Label>
        </div>
        <Textarea
        className="h-[120px]  resize-none w-[80%]"
          id="categorydescription"
          name="categorydescription"
          placeholder="Enter Category Description"
          required
        />
      </div>

      <div className="flex flex-row my-2.5 items-center space-x-4">
        <Button
          className={`${pending ? "cursor-wait" : "cursor-pointer"}  w-[200px]` }
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

export default memo(NewCategoryForm);
