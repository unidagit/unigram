import SignIn from "@/components/signin/Signin";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const session = await getServerSession(authOptions); //세션에 대한 정보를 가지고 옴.

  if (session) {
    //로그인을 했다면
    redirect("/");
  }

  const providers = (await getProviders()) ?? {}; //로그인을 안했으면 이 로직이 실행
  return <SignIn providers={providers} />;
}
