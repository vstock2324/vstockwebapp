"use client"
import { handleDeleteUser } from "@/actions/admin/dashboard/users";
import { Button, TableCell } from "flowbite-react";
import { memo } from "react";




const UserDeleteButtonWrapper = ({ userId }: {userId: string}) => {
const handleDeleteUserWithId = handleDeleteUser.bind(null, userId);
return (
    <TableCell>
     <form action={handleDeleteUserWithId}>   
      <Button  type="submit"  className="cursor-pointer"  color={"red"}>
        Delete
      </Button>
      </form>
    </TableCell>
  );
};

export default memo(UserDeleteButtonWrapper);
