"use client";
import React, { memo } from 'react';
import useLoggedInAdmin from '@/context/useLoggedInAdmin';
import useLoggedInUser from '@/context/useLoggedInUser';
import useVectorModal from '@/context/useVectorModal';
import supabase from '@/utils/supabase/supabaseBrowserClient';
import { PiShare } from 'react-icons/pi';
import VectorShareButtonLoginAlert from './VectorShareButtonLoginAlert';

const VectorShareButton=()=> {
  
      const { selectedVector } = useVectorModal();
      const { loggedInUser } = useLoggedInUser();
      const { loggedInAdmin } = useLoggedInAdmin();
    async function handleClickShare() {
        try{
           if(loggedInUser && !loggedInAdmin){
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { data, error } = await supabase
                .from("user_shared_vector")
                .insert({"user_id":loggedInUser.id,"vector_id":selectedVector.vector_id});
              if (error) throw new Error(error.message);
             }
              else if(!loggedInUser && loggedInAdmin){
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const { data, error } = await supabase
                  .from("user_shared_vector")
                  .insert({"user_id":loggedInAdmin.id,"vector_id":selectedVector.vector_id});
                if (error) throw new Error(error.message);
              }
        }
        catch (error) {
            console.error("Error sharing vector:", error);
        }
    }

  return (
    <>{((loggedInUser && !loggedInAdmin) || (!loggedInUser && loggedInAdmin) ) ?
    (<button onClick={handleClickShare} className="cursor-pointer p-2 flex-grow space-x-2 rounded-md  flex flex-row items-center justify-center bg-[#F3F3F3] flex-nowrap">
    <h4 className="xl:text-lg lg:text-base text-black font-medium text-nowrap font-primary">
      Share Vector
    </h4>
    <PiShare fill={"black"} size={20} />
  </button>):(<VectorShareButtonLoginAlert/>)
}</>);
}

export default memo(VectorShareButton);