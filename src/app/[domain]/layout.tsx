import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { DefaultLayout } from "@/components";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import axios from "axios";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const baseURL = process.env.NEXT_PUBLIC_ENV_API_URL;
  const { data } = await axios(`${baseURL}api/domain/${params.domain}`);
  if(!data) redirect(`/404`)
    
  console.log('params', params)

  return <section>{children}</section>
}
