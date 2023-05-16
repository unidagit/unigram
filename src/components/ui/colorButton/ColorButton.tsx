import React from "react";

type Props = {
  text: string;
  onClick: () => void; // 반환하는 값이 없음.
};

export default function ColorButton({ text, onClick }: Props) {
  return <button onClick={onClick}>{text}</button>;
}
