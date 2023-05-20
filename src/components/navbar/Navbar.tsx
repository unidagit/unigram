"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../ui/icons/HomeIcon";
import HomeFillIcon from "../ui/icons/HomeFillIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import SearchFillIcon from "../ui/icons/SearchFillIcon";
import NewIcon from "../ui/icons/NewIcon";
import NewFillIcon from "../ui/icons/NewFillIcon";
import ColorButton from "../ui/colorButton/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "../avatar/Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession(); //세션 정보를 가져옴
  const user = session?.user;

  return (
    <nav className="flex items-center justify-between px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">unigram</h1>
      </Link>

      <ul className="flex gap-4 items-center p-4">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {pathname === item.href ? item.clickedIcon : item.icon}
            </Link>
          </li>
        ))}
        {user && (
          <li>
            <Link href={`/user/${user.username}`}>
              <Avatar image={user.image} size="small" highlight />
            </Link>
          </li>
        )}
        <li>
          {session ? (
            <ColorButton text="Sign out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Sign in" onClick={() => signIn()} />
          )}
        </li>
      </ul>
    </nav>
  );
}
