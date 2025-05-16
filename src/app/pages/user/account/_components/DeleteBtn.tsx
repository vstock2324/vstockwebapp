"use client";
import { handleUserAccountDeletion } from "@/actions/pages/user/account";
import useLoggedInAdmin from "@/context/useLoggedInAdmin";
import useLoggedInUser from "@/context/useLoggedInUser";
import { Button } from "flowbite-react";
import React, { memo } from "react";

const DeleteBtn = () => {
  const { loggedInUser } = useLoggedInUser();
  const { loggedInAdmin } = useLoggedInAdmin();
  let handleUserAccountDeletionWithId = undefined;
  if (!loggedInUser && loggedInAdmin) {
    handleUserAccountDeletionWithId = handleUserAccountDeletion.bind(
      null,
      loggedInAdmin.id
    );
  } else if (loggedInUser && !loggedInAdmin) {
    handleUserAccountDeletionWithId = handleUserAccountDeletion.bind(
      null,
      loggedInUser.id
    );
  }

  return (
    <form action={handleUserAccountDeletionWithId}>
      <Button type="submit" className="cursor-pointer focus:outline-none" color={"red"}>
        Delete Account
      </Button>
    </form>
  );
};

export default memo(DeleteBtn);
