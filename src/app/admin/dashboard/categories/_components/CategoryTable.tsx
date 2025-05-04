/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useCategory from "@/context/useAdminCategory";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { memo } from "react";
import CategoryPagination from "./CategoryPagination";
import CategorySearchInput from "./CategorySearchInput";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import CategoryDateCell from "./CategoryDateCell";
import NewCategoryLinkBtn from "./NewCategoryLinkBtn";

const CategoryTable = () => {
  const { category } = useCategory();
  const supabase = createClient();
  const router=useRouter();
  async function handleDeleteClick(id: string) {
    const { error } = await supabase
      .from("category")
      .delete()
      .eq("id", `${id}`);
    if (error) throw new Error(error.message);
    router.refresh();
    console.log("Category Delete Successfully");
  }

  return (
    <div className="overflow-x-overflow">
      <CategorySearchInput />
      <NewCategoryLinkBtn/>
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell className="w-[100px]">Id</TableHeadCell>
            <TableHeadCell className="w-[100px]">Name</TableHeadCell>
            <TableHeadCell className="w-[500px]">Description</TableHeadCell>
            <TableHeadCell className="w-[100px]">Created At</TableHeadCell>
            <TableHeadCell className="w-[100px]">
              <span className="sr-only">Edit</span>
            </TableHeadCell>
            <TableHeadCell className="w-[100px]">
              <span className="sr-only">Delete</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {category &&
            category.map((item: any) => {
              return (
                <TableRow
                  key={nanoid()}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="whitespace-wrap font-medium text-gray-900 dark:text-white">
                    {item.id}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <CategoryDateCell createdAt={item.createdAt}/>
                  <TableCell>
                    <Link
                      href={`/admin/dashboard/categories/edit/${item.id}`}
                      className="font-medium text-[#2E67DD] hover:underline dark:text-[#2E67DD]"
                    >
                      Edit
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="cursor-pointer"
                      onClick={() => handleDeleteClick(item.id)}
                      color={"red"}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <CategoryPagination />
    </div>
  );
};

export default memo(CategoryTable);
