"use client";
import { Button, Form, Row, Col, Input, Checkbox } from "antd";

export default function LoginForm({ onFinish }: any) {
  return (
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
  );
}
