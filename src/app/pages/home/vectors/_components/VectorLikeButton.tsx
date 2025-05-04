"use client";
import useLoggedInAdmin from "@/context/useLoggedInAdmin";
import useLoggedInUser from "@/context/useLoggedInUser";
import useVectorModal from "@/context/useVectorModal";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";



const VectorLikeButton = () => {
  const [like, setLike] = useState<boolean>(false);
  const { selectedVector } = useVectorModal();
  const { loggedInUser } = useLoggedInUser();
  const { loggedInAdmin } = useLoggedInAdmin();
  const router=useRouter();
  async function handleCheckLikeStatus() {
    if (!loggedInUser && !loggedInAdmin) {
      setLike(false);
      return;
    } else if (loggedInUser && !loggedInAdmin) {
      const { data, error } = await supabase
        .from("user_liked_vector")
        .select("*")
        .eq("user_id", loggedInUser.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) throw new Error(error.message);
      if (data.length === 1) {
        setLike(true);
      }
    } else if (!loggedInUser && loggedInAdmin) {
      const { data, error } = await supabase
        .from("user_liked_vector")
        .select("*")
        .eq("user_id", loggedInAdmin.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) throw new Error(error.message);
      if (data.length === 1) {
        setLike(true);
      }
    }
  }

  async function handleClickLikeStatus() {
    if (!loggedInUser && !loggedInAdmin) {
      router.push("/pages/login");
    } else if (loggedInUser && !loggedInAdmin) {
      const { data, error } = await supabase
        .from("user_liked_vector")
        .select("*")
        .eq("user_id", loggedInUser.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) throw new Error(error.message);
      if (data.length === 1) {
        const { error } = await supabase
          .from("user_liked_vector")
          .delete()
          .eq("user_id", loggedInUser.id)
          .eq("vector_id", selectedVector.vector_id);
        if (error) throw new Error(error.message);
        setLike(false);
      } else if (data.length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data, error } = await supabase
          .from("user_liked_vector")
          .insert({ user_id: loggedInUser.id, vector_id: selectedVector.vector_id })
          .select();
        if (error) throw new Error(error.message);
        setLike(true);
      }
    } else if (!loggedInUser && loggedInAdmin) {
      const { data, error } = await supabase
        .from("user_liked_vector")
        .select("*")
        .eq("user_id", loggedInAdmin.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) throw new Error(error.message);
      if (data.length === 1) {
        const { error } = await supabase
          .from("user_liked_vector")
          .delete()
          .eq("user_id", loggedInAdmin.id)
          .eq("vector_id", selectedVector.vector_id);
        if (error) throw new Error(error.message);
        setLike(false);
      } else if (data.length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data, error } = await supabase
          .from("user_liked_vector")
          .insert({ user_id: loggedInAdmin.id, vector_id: selectedVector.vector_id })
          .select();
        if (error) throw new Error(error.message);
        setLike(true);
      }
    }
  }
  useEffect(() => {
    handleCheckLikeStatus();
  }, []);

  return (
    <button
      onClick={handleClickLikeStatus}
      type="button"
      className=" cursor-pointer p-2 flex-grow space-x-2 rounded-md  inline-flex items-center justify-center bg-[#F3F3F3]"
    >
      <h4 className="xl:text-lg lg:text-base text-black font-medium">
        Add to Likes
      </h4>
      <FaHeart fill={like ? "red" : "black"} size={20} />
    </button>
  );
};

export default memo(VectorLikeButton);
