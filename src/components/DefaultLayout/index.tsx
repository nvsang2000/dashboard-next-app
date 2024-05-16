"use client";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuItemProps, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const { Content, Sider } = Layout;
export default function DefaultLayout({ children }: any) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const menus = [
    {
      key: "(User)(Policy)(Domain)",
      label: "Administrators",
      icon: "ic_administrator.svg",
      children: [
        {
          key: "(Domain)",
          label: "Domains",
          href: "/admin/domains",
        },
        {
          key: "(User)",
          label: "Users",
          href: "/admin/users",
        },
        {
          key: "(Policy)",
          label: "Policies",
          href: "/admin/policies",
        },
      ],
    },
    {
      key: "(Staff)(Group)",
      label: "Manager Staffs",
      icon: "ic_group.svg",
      children: [
        {
          key: "(Staff)",
          label: "Staffs",
          href: "/admin/staffs",
        },
        {
          key: "(Group)",
          label: "Groups",
          href: "/admin/groups",
        },
      ],
    },
    {
      key: "(Form)",
      label: "Manager Forms",
      icon: "ic_form.svg",
      href: "/admin/forms",
    },
    {
      key: "(Calendar)",
      label: "Manager Calendars",
      icon: "ic_calendar.svg",
      href: "/admin/calendars",
    },
    {
      key: "(Profile)(Infor)(Google)",
      label: "Profile Me",
      icon: "ic_avatar.svg",
      children: [
        {
          key: "(Profile)(Infor)",
          label: "Information",
          href: "/admin/profile/infor",
        },
        {
          key: "(Profile)(Google)",
          label: "Google Calendar",
          href: "/admin/profile/google",
        },
        {
          key: "(Profile)(Logout)",
          label: "Logout",
          href: "/admin/profile/logout",
        },
      ],
    },
    {
      key: "(Help)",
      label: "Help & Support",
      icon: "ic_question.svg",
      href: "/admin/help",
    },
  ];

  const mappingMenu = menus.map((item: any) => {
    return {
      key: item.key,
      icon: (
        <Image
          src={`/svg/${item.icon}`}
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      ),
      label: (
        <div onClick={() => item.href && router.push(item.href)}>
          {item.label}
        </div>
      ),
      children: item?.children?.map((sub: any) => {
        return {
          key: sub.key,
          label: (
            <div onClick={() => router.push(sub.href)}>
              {sub.label}
            </div>
          ),
        };
      }),
    };
  });

  return (
    <Layout style={{ minHeight: "120vh" }}>
      <Layout className="site-layout">
        <Sider
          style={{
            background: colorBgContainer,
          }}
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
            }}
            items={mappingMenu}
          />
        </Sider>
        <Content className={`"p-[20px]"} `}>{children}</Content>
      </Layout>
    </Layout>
  );
}
