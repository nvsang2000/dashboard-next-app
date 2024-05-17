"use client";
import { Layout } from "antd";

const { Content } = Layout;
export default function NoNeedDefaultLayout({ children }: any) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}
