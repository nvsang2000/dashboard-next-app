import axios from "axios";
import { redirect } from "next/navigation";

export default async function DomainPage({
  params,
}: {
  params: { domain: string };
}) {
  const baseURL = process.env.NEXT_PUBLIC_ENV_API_URL;
  const { data } = await axios(`${baseURL}api/domain/${params.domain}`);
  if (data) redirect(`/${params.domain}/login`);
  else redirect(`/404`);
}
