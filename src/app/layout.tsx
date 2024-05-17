import "@/styles/globals.css";
import { DefaultLayout } from "@/components";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <AntdRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
