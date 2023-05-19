"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import ColorButton from "../ui/colorButton/ColorButton";
type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign In with ${name}`}
          size="big"
          onClick={() => signIn(id, { callbackUrl })}
        />
      ))}
    </>
  );
}
