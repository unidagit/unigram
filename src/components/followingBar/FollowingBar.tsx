"use client";
import { getUser } from "@/lib/api";
import { DetailUser } from "@/model/user";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import Avatar from "../avatar/Avatar";
import ScrollableBar from "../ui/scrollableBar/ScrollableBar";

export default function FollowingBar() {
  //1.클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  //2.백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  //3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴.(followings)
  //4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌.

  const {
    data,
    isLoading: loading,
    isError,
  } = useQuery<DetailUser>(["user"], getUser);

  const users = data?.following;
  // const users = undefined;
  // const users = data?.following && [
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  // ];
  // console.log(data?.following);

  return (
    <section className="flex  items-center justify-center py-4 shadow-sm shadow-neutral-300 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <ClipLoader size={35} color="#606060" />
      ) : (
        (!users || users.length === 0) && <p>{`팔로잉 사용자가 없습니다`}</p>
      )}

      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <div key={username} className="flex flex-col items-center bg-white">
              <Link href={`/user/${username}`}>
                <Avatar image={image} highlight />
                <p className="text-sm text-ellipsis text-center overflow-hidden">
                  {username}
                </p>
              </Link>
            </div>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
