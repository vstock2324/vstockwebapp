"use server";
import { createClient } from "@/utils/supabase/server";

type prevStateType = {
  videoname: string | undefined;
  videodescription: string | undefined;
  videofile: File | undefined;
};

export async function handleNewVideoSubmitForm(
  prevState: prevStateType,
  formData: FormData
): Promise<prevStateType> {
  const videoname = (formData.get("videoname") as string) || undefined;
  const videodescription =
    (formData.get("videodescription") as string) || undefined;
  const videofile = (formData.get("videofile") as File) || undefined;
  
  try {
    const supabase = await createClient();
    if (videoname && videodescription && videofile) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, error } = await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
        .upload(
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_ADMIN_VIDEOS_FOLDER}/${videoname}.${videofile.name.split(".")[1]}`,
          videofile,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );
      if (error) throw new Error(error.message);
      
      handleVideoDetailsSubmit(
        data.id,
       `${videoname}.${videofile.name.split(".")[1]}`,
        videodescription,
        data.path,
        data.fullPath
      );
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  } finally {
    return {
      videoname,
      videodescription,
      videofile,
    };
  }
}

export async function handleVideoDetailsSubmit(
  videoId: string,
  videoName: string,
  videoDescription: string,
  videoPath: string,
  videoFullPath: string
) {
  try {
    const supabase = await createClient();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from("video_details")
      .insert([
        {
          video_id: videoId,
          name: videoName,
          description: videoDescription,
          path: videoPath,
          fullpath: videoFullPath,
        },
      ])
      .select();
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error updating video details:", error);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleVideoDelete(videoPath: string, formData: FormData) {
  try {
    const supabase = await createClient();
    console.log("videoPath", videoPath);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase.storage
      .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
      
      .remove([videoPath.toString()])
      
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error deleting video:", error);
  }
}
