import { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import adminAuthClient from "@/utils/supabase/server-side-auth";
import Link from "next/link";
import Image from "next/image";
import UserDeleteButtonWrapper from "./UserDeleteButtonWrapper";

const UsersTable = async () => {
  const {
    data: { users },
    error,
  } = await adminAuthClient.listUsers();
  if (error || !users) throw new Error(error?.message);
  return (
    <div className="overflow-x-auto">
      <Table className="border rounded-md " hoverable>
        <TableHead className="border-b">
          <TableRow>
            <TableHeadCell className="text-center px-3">AVATAR</TableHeadCell>
            <TableHeadCell className="text-center px-2">
              Full Name
            </TableHeadCell>
            <TableHeadCell className="text-center px-2">USER ID</TableHeadCell>
            <TableHeadCell className="text-center px-2">EMAIL</TableHeadCell>
            <TableHeadCell className="text-center px-2">PHONE</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Delete</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {users &&
            users.map((user) => {
              return (
                <TableRow
                  key={user.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="px-3">
                    <Image
                      className="rounded-full"
                      src={
                        user.user_metadata["avatar_url"] ?? "/images/admin.png"
                      }
                      alt="User Image"
                      width={60}
                      height={60}
                    />
                  </TableCell>
                  <TableCell className="px-2">
                    {user.user_metadata["full_name"] ?? "Admin"}
                  </TableCell>
                  <TableCell className="whitespace-wrap font-medium px-2 text-gray-900 dark:text-white">
                    {user.id}
                  </TableCell>
                  <TableCell className="px-2">{user.email}</TableCell>
                  <TableCell className="px-2">{user.phone}</TableCell>
                  <TableCell className="px-2">
                    <Link
                      href="#"
                      className="font-medium text-[#2E67DD] hover:underline dark:text-[#2E67DD]"
                    >
                      Edit
                    </Link>
                  </TableCell >
                  <UserDeleteButtonWrapper userId={user.id} />
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default memo(UsersTable);
