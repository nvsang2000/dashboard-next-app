import "../globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { NoNeedDefaultLayout } from "@/components";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "Login" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <AntdRegistry>
          <NoNeedDefaultLayout>{children}</NoNeedDefaultLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
