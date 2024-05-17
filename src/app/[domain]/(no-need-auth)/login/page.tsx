"use client";
import { Row, Col, message } from "antd";
import axios from "axios";
import { LoginForm } from "@/components";
import { loginApi } from "@/services/apis";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage({ params }: { params: { domain: string } }) {
  const router = useRouter();
  const handleLogin = async (values: any) => {
    const baseURL = process.env.NEXT_PUBLIC_ENV_API_URL;
    const { data } = await axios.get(`${baseURL}api/domain/${params.domain}`);
    if (!data) router.push("/404");
    const valueSubmit = { ...values, domainId: data.id };

    const result = await loginApi(valueSubmit);
    const accessToken: string = result?.data || {};
    Cookies.set("accessToken", accessToken, { expires: 30 });
  };

  return (
    <div className="bg-white">
      <Row justify={"center"} align={"middle"} style={{ height: "300px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2
            className={
              "lg-[36px] pt-[20px] text-[24px] font-semibold text-[var(--green)] sm:text-[26px] md:pt-[40px] md:text-[36px] xl:text-[36px]"
            }
          >
            Login
          </h2>
        </Col>
        <Col lg={14} xs={22} style={{ maxWidth: 512 }}>
          <LoginForm onFinish={handleLogin} />
        </Col>
      </Row>
    </div>
  );
}
