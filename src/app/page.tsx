import FollowingBar from "@/components/followingBar/FollowingBar";
import PostList from "@/components/postList/PostList";
import SideBar from "@/components/sideBar/SideBar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions); //세션에 대한 정보를 가지고 옴.
  console.log(`session입니까?${session}`);
  console.log(`sessionUser입니까?${session?.user}`);
  const user = session?.user;
  console.log(`user입니까?${user}`);
  if (!user) {
    //로그인한 사용자가 없다면
    //로그인을 했다면
    redirect("/auth/signin"); //로그인페이지로 이동
  }
  return (
    <section className="w-full flex flex-col md:flex-row ">
      <div className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
