"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { RiSearch2Fill } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import HomeIcon from "../ui/icons/HomeIcon";
import HomeFillIcon from "../ui/icons/HomeFillIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import SearchFillIcon from "../ui/icons/SearchFillIcon";
import NewIcon from "../ui/icons/NewIcon";
import NewFillIcon from "../ui/icons/NewFillIcon";
import ColorButton from "../ui/colorButton/ColorButton";

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
        <ColorButton text="Sign in" onClick={() => {}} />
      </ul>
    </nav>
  );
}
