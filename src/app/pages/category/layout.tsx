import type { Metadata } from "next";
import "../../globals.css";
export const metadata: Metadata = {
  title: "login",
  description: "Generated by create next app",
};

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
