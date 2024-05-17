import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { DefaultLayout } from "@/components";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <AntdRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
