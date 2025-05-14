"use client";
import useLoggedInAdmin from "@/context/useLoggedInAdmin";
import useLoggedInUser from "@/context/useLoggedInUser";
import useVectorModal from "@/context/useVectorModal";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { useRouter } from "next/navigation";
import React, { memo, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import VectorLikeButtonLoginAlert from "./VectorLikeButtonLoginAlert";
import { Bounce, toast } from "react-toastify";

const VectorLikeButton = () => {
  const { like, setLike, selectedVector } = useVectorModal();
  const { loggedInUser } = useLoggedInUser();
  const { loggedInAdmin } = useLoggedInAdmin();
  const router = useRouter();
  async function handleCheckLikeStatus() {
    if (!loggedInUser && !loggedInAdmin) {
      setLike(false);
      return;
    } else if (loggedInUser && !loggedInAdmin) {
      const { count, error } = await supabase
        .from("user_liked_vector")
        .select("*", { count: "exact" })
        .eq("user_id", loggedInUser.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) throw new Error(error.message);
      if (count === 1) {
        setLike(true);
      } else if (count === 0) {
        setLike(false);
      }
    } else if (!loggedInUser && loggedInAdmin) {
      const { count, error } = await supabase
        .from("user_liked_vector")
        .select("*", { count: "exact" })
        .eq("user_id", loggedInAdmin.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) throw new Error(error.message);
      if (count === 1) {
        setLike(true);
      } else if (count === 0) {
        setLike(false);
      }
    }
  }

  async function handleClickLikeStatus() {
    if (!loggedInUser && !loggedInAdmin) {
      router.push("/pages/login");
    } else if (loggedInUser && !loggedInAdmin) {
      const { count: userCount, error } = await supabase
        .from("user_liked_vector")
        .select("*", { count: "exact" })
        .eq("user_id", loggedInUser.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        throw new Error(error.message);
      } else {
        if (userCount === 1) {
          const { error } = await supabase
            .from("user_liked_vector")
            .delete()
            .eq("user_id", loggedInUser.id)
            .eq("vector_id", selectedVector.vector_id);
          if (error) {
            toast.error(`${error.message}`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });

            throw new Error(error.message);
          } else {
            setLike(false);
            toast.success("Vector Disliked", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        } else if (userCount === 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { data, error } = await supabase
            .from("user_liked_vector")
            .insert({
              user_id: loggedInUser.id,
              vector_id: selectedVector.vector_id,
            })
            .select();
          if (error) {
            toast.error(`${error.message}`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });

            throw new Error(error.message);
          } else {
            setLike(true);
            toast.success(`Vector Liked`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        }
      }
    } else if (!loggedInUser && loggedInAdmin) {
      const { count: adminCount, error } = await supabase
        .from("user_liked_vector")
        .select("*", { count: "exact" })
        .eq("user_id", loggedInAdmin.id)
        .eq("vector_id", selectedVector.vector_id);
      if (error) {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        throw new Error(error.message);
      } else {
        if (adminCount === 1) {
          const { error } = await supabase
            .from("user_liked_vector")
            .delete()
            .eq("user_id", loggedInAdmin.id)
            .eq("vector_id", selectedVector.vector_id);
          if (error) {
            toast.error(`${error.message}`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });

            throw new Error(error.message);
          } else {
            setLike(false);
            toast.success(`Vector Disliked`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        } else if (adminCount === 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { data, error } = await supabase
            .from("user_liked_vector")
            .insert({
              user_id: loggedInAdmin.id,
              vector_id: selectedVector.vector_id,
            })
            .select();
          if (error) {
            toast.error(`${error.message}`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            throw new Error(error.message);
          } else {
            setLike(true);
            toast.success(`Vector Liked`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        }
      }
    }
  }
  useEffect(() => {
    handleCheckLikeStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVector]);

  return (
    <>
      {(loggedInUser && !loggedInAdmin) || (!loggedInUser && loggedInAdmin) ? (
        <>
          {" "}
          <button
            onClick={handleClickLikeStatus}
            type="button"
            className=" cursor-pointer p-2 flex-grow space-x-2 rounded-md  flex flex-row items-center justify-center bg-[#F3F3F3]"
          >
            <h4 className="xl:text-lg lg:text-base text-black font-medium text-nowrap font-primary">
              Add to Likes
            </h4>
            <FaHeart fill={like ? "red" : "black"} size={20} />
          </button>
        </>
      ) : (
        <VectorLikeButtonLoginAlert />
      )}
    </>
  );
};
export default memo(VectorLikeButton);
