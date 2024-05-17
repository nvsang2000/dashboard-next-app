"use client";
import { getDomainPublicApi, loginApi } from "@/services/apis";
import { Button, Form, Row, Col, Input, Checkbox } from "antd";
import { useEffect } from "react";

const Login = () => {
  const onFinish = async (values: any) => {
    //const { data } = await getDomainPublicApi(domain);
    const valueSubmit = {
      ...values,
      domainId: "89b263e9-35ac-4ef5-926a-bdd7eaa5deaf",
    };
    const result = await loginApi(valueSubmit);

    console.log("result", result);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
          <Form
            name="basic"
            autoComplete="off"
            layout={"vertical"}
            colon={false}
            onFinish={onFinish}
          >
            <Form.Item
              label={
                <span
                  className={
                    "lg-[30px] text-[20px] font-medium !text-black sm:text-[24px] md:text-[30px] xl:text-[20px]"
                  }
                >
                  Email
                </span>
              }
              name="username"
            >
              <Input size={"large"} />
            </Form.Item>
            <Form.Item
              label={
                <span
                  className={
                    "lg-[30px] text-[20px] font-medium !text-black sm:text-[24px] md:text-[30px]  xl:text-[20px]"
                  }
                >
                  Password
                </span>
              }
              name="password"
            >
              <Input.Password size={"large"} className="!bg-white" />
            </Form.Item>
            <Col>
              <p
                style={{
                  cursor: "pointer",
                  width: "8rem",
                  color: "red",
                }}
              >
                Forgot password ?
              </p>
            </Col>
            <Row gutter={20}>
              <Col className={"grid place-content-center"}>
                <Form.Item label={""} name={"remember"} noStyle>
                  <Checkbox checked />
                </Form.Item>
              </Col>
              <Col>
                <b
                  className={
                    "lg-[30px] text-[20px] font-medium !text-black sm:text-[24px] md:text-[30px]  xl:text-[20px]"
                  }
                >
                  Remember for the next sign
                </b>
              </Col>
            </Row>
            <Form.Item>
              <Button
                className={
                  "mt-8 w-full !border !border-[var(--green)] !font-medium !text-[var(--green)] hover:!bg-[var(--green)]  hover:!text-white"
                }
                size={"large"}
                //loading={loading}
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
