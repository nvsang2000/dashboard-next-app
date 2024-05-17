"use client";
import { Layout } from "antd";

const { Content } = Layout;
export default function DefaultLayout({ children }: any) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}
