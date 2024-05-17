import { Row, Col, message } from "antd";
import axios from "axios";
import { LoginForm } from "@/components";
import { redirect } from "next/navigation";

const Login = async ({ params }: { params: { domain: string } }) => {
  const handleLogin = async (values: any) => {
    "use server";
    const baseURL = process.env.NEXT_PUBLIC_ENV_API_URL;
    const { data } = await axios.get(`${baseURL}api/domain/${params.domain}`);

    if (!data) redirect("/404");
    const valueSubmit = { ...values, domainId: data.id };

    console.log("result", `${baseURL}auth/login`);
    await axios
      .post(`${baseURL}auth/login`, valueSubmit, {
        headers: { "Content-Type": "application/json" },
      })
      .then(({ data }) => {})
      .catch((e) => console.log("e.data", e.response.data));

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
};

export default Login;
