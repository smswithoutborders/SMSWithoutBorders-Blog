import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tighter leadding-tight">
    {children}
    </h1>
  );
}
