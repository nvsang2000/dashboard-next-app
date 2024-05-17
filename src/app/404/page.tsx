import { Result } from 'antd'

export default function Page404() {
  return (
    <>
      <div className={'rounded-[8px] bg-white p-[40px]'}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
      </div>
    </>
  )
}
