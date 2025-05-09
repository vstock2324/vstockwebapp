"use server";

import { createClient } from "@/utils/supabase/server";

type prevStateType = {
  vectorname: string | undefined;
  vectordescription: string | undefined;
  vectorcategories: string[] | undefined;
  vectortags: string[] | undefined;
  vectorlicense: string | undefined;
  vectororientation: string | undefined;
  vectorjpegfile: File | undefined;
  vectorsvgfile: File | undefined;
  vectoraifile: File | undefined;
};

export async function handleVectorFormSubmit(
  prevState: prevStateType,
  formData: FormData
): Promise<prevStateType> {
  try {
    const supabase = await createClient();
    const vectorname = (formData.get("vectorname") as string) || undefined;
    const vectordescription =
      (formData.get("vectordescription") as string) || undefined;
    const vectorcategories =
      (formData.getAll("vectorcategories") as string[]) || undefined;
    const vectortags = (formData.getAll("vectortags") as string[]) || undefined;
    const vectorlicense =
      (formData.get("vectorlicense") as string) || undefined;
    const vectororientation =
      (formData.get("vectororientation") as string) || undefined;

    const vectorjpegfile =
      (formData.get("vectorjpegfile") as File) || undefined;
    const vectorsvgfile = (formData.get("vectorsvgfile") as File) || undefined;
    const vectoraifile = (formData.get("vectoraifile") as File) || undefined;

    const { data, error } = await supabase.rpc(
      "insert_vector_categories_tags",
      {
        p_category_ids: vectorcategories,
        p_description: vectordescription,
        p_license: vectorlicense,
        p_likes: 0,
        p_name: vectorname,
        p_orientation: vectororientation,
        p_shares: 0,
        p_tag_ids: vectortags,
      }
    );
    if (error) console.error(error);
    else {
      console.log(data.success, data.vector_id);
      if (
        vectorjpegfile !== undefined &&
        vectorsvgfile !== undefined &&
        vectoraifile !== undefined
      ) {
        const uploadFiles = [vectorjpegfile, vectorsvgfile, vectoraifile];

        const uploadPromises = uploadFiles.map(async (file) => {
          let folder_name = undefined;
          if (
            file.name.split(".")[1] === "jpeg" ||
            file.name.split(".")[1] === "jpg"
          )
            folder_name = "admin_vectors/jpeg";
          else if (file.name.split(".")[1] === "svg")
            folder_name = "admin_vectors/svg";
          else if (file.name.split(".")[1] === "ai")
            folder_name = "admin_vectors/ai";

          if (folder_name !== undefined) {
            return supabase.storage
              .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
              .upload(
                `${folder_name}/${file.name.split(".")[0]}_${Date.now()}.${
                  file.name.split(".")[1]
                }`,
                file,
                {
                  cacheControl: "3600",
                  upsert: false,
                }
              );
          }
        });

        try {
          const results = await Promise.all(uploadPromises);
          console.log("Files uploaded successfully:", results);
          console.log(`${data.vector_id}`);

          const { data: insertedThreeFiles, error: insertedThreeFilesError } =
            await supabase.rpc("insert_vector_three_files", {
              p_ai_id: results[2]?.data?.id,
              p_ai_path: results[2]?.data?.path,
              p_jpeg_id: results[0]?.data?.id,
              p_jpeg_path: results[0]?.data?.path,
              p_svg_id: results[1]?.data?.id,
              p_svg_path: results[1]?.data?.path,
              p_vector_id: `${data.vector_id}`,
            });
          if (insertedThreeFilesError)
            console.error(insertedThreeFilesError.message);
          else console.log(insertedThreeFiles);
        } catch (error) {
          console.error("Error uploading files:", error);
        }
      }
    }
    return {
      vectorname,
      vectordescription,
      vectorcategories,
      vectortags,
      vectorlicense,
      vectororientation,
      vectorjpegfile,
      vectorsvgfile,
      vectoraifile,
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export async function handleChangeVectorJPEGFile(
  vectorId: string,
  formData: FormData
) {
  const supabase = await createClient();
  const vectorjpegfile = formData.get("vectorjpegfile") as File;
  const { error } = await supabase
    .from("vector_jpeg_file")
    .delete()
    .eq("vector_id", vectorId);
  if (error) throw new Error(error.message);
  else {
    const { data: uploadedJPEG, error: uploadedJPEGError } =
      await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
        .upload(
          `admin_vectors/jpeg/${
            vectorjpegfile.name.split(".")[0]
          }_${Date.now()}.${vectorjpegfile.name.split(".")[1]}`,
          vectorjpegfile,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );
    if (uploadedJPEGError) throw new Error(uploadedJPEGError.message);
    else {
      const { data: insertedJPEGData, error: insertedJPEGDataError } =
        await supabase
          .from("vector_jpeg_file")
          .insert([
            {
              vector_id: vectorId,
              jpeg_id: uploadedJPEG.id,
              jpeg_path: uploadedJPEG.path,
            },
          ])
          .select();
      if (insertedJPEGDataError) throw new Error(insertedJPEGDataError.message);
      else {
        console.log(insertedJPEGData);
      }
    }
  }
}

export async function handleChangeVectorSVGFile(
  vectorId: string,
  formData: FormData
) {
  const supabase = await createClient();
  const vectorsvgfile = formData.get("vectorsvgfile") as File;
  const { error } = await supabase
    .from("vector_svg_file")
    .delete()
    .eq("vector_id", vectorId);
  if (error) throw new Error(error.message);
  else {
    const { data: uploadedSVG, error: uploadedSVGError } =
      await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
        .upload(
          `admin_vectors/svg/${
            vectorsvgfile.name.split(".")[0]
          }_${Date.now()}.${vectorsvgfile.name.split(".")[1]}`,
          vectorsvgfile,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );
    if (uploadedSVGError) throw new Error(uploadedSVGError.message);
    else {
      const { data: insertedSVGData, error: insertedSVGDataError } =
        await supabase
          .from("vector_svg_file")
          .insert([
            {
              vector_id: vectorId,
              svg_id: uploadedSVG.id,
              svg_path: uploadedSVG.path,
            },
          ])
          .select();
      if (insertedSVGDataError) throw new Error(insertedSVGDataError.message);
      else {
        console.log(insertedSVGData);
      }
    }
  }
}

export async function handleChangeVectorAIFile(
  vectorId: string,
  formData: FormData
) {
  const supabase = await createClient();
  const vectoraifile = formData.get("vectoraifile") as File;
  const { error } = await supabase
    .from("vector_ai_file")
    .delete()
    .eq("vector_id", vectorId);
  if (error) throw new Error(error.message);
  else {
    const { data: uploadedAI, error: uploadedAIError } =
      await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
        .upload(
          `admin_vectors/ai/${
            vectoraifile.name.split(".")[0]
          }_${Date.now()}.${vectoraifile.name.split(".")[1]}`,
          vectoraifile,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );
    if (uploadedAIError) throw new Error(uploadedAIError.message);
    else {
      const { data: insertedAIData, error: insertedAIDataError } =
        await supabase
          .from("vector_ai_file")
          .insert([
            {
              vector_id: vectorId,
              ai_id: uploadedAI.id,
              ai_path: uploadedAI.path,
            },
          ])
          .select();
      if (insertedAIDataError) throw new Error(insertedAIDataError.message);
      else {
        console.log(insertedAIData);
      }
    }
  }
}
