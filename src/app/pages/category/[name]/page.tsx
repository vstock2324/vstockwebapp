import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <div>Category {name} coming soon</div>;
}
