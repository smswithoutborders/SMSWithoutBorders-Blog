import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-5xl lg:text-4xl font-bold md:leading-none mb-10 text-center py-5">
      {children}
    </h1>
  );
}
