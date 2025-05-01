import { memo } from "react";
import VectorNameField from "./VectorNameField";
import VectorDescriptionField from "./VectorDescriptionField";
import VectorSelectCategoryField from "./VectorSelectCategoryField";
import VectorSelectTagField from "./VectorSelectTagField";
import VectorLicenseField from "./VectorLicenseField";
import VectorOrientationField from "./VectorOrientationField";
import VectorJPEGFileField from "./VectorJPEGFileField";
import VectorSVGFileField from "./VectorSVGFileField";
import VectorAIFileField from "./VectorAIFileField";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditVectorForm = () => {
  return (
    <div className="mx-2 my-2 p-4  w-full flex-col  gap-4 border-2  rounded-md border-gray-400">
      <VectorNameField />
      <VectorDescriptionField />
      <VectorSelectCategoryField />
      <VectorSelectTagField />
      <VectorLicenseField />
      <VectorOrientationField />
      <VectorJPEGFileField />
      <VectorSVGFileField />
      <VectorAIFileField />
    </div>
  );
};

export default memo(EditVectorForm);
