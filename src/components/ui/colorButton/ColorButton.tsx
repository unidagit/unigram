import React from "react";

type Props = {
  text: string;
  onClick: () => void; // 반환하는 값이 없음.
  size?: "small" | "big"; //1.size가 small이거나 big. 유니온 타입
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  //2.size를 명시하지 않으면 기본 설정 small
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300
    ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"}
    `}
    >
      <button
        className={`bg-white rounded-sm  p-[0.3rem] hover:opacity-90 transition-opacity
        ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"}
        `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
