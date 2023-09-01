import React from "react";

export const Link = ({
  href,
  target,
  children,
}: {
  href?: string;
  target?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target={target}
      style={{
        pointerEvents: href ? "auto" : "none",
      }}
    >
      {children}
    </a>
  );
};
