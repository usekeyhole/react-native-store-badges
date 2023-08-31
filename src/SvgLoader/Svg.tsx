import React from "react";
import { SvgProps } from ".";
import { ReactSVG } from "react-svg";

export const Svg = ({ uri, height }: SvgProps) => {
  return (
    <ReactSVG
      src={uri}
      style={{
        height,
      }}
      afterInjection={(svg) => {
        svg.removeAttribute("width");
        svg.setAttribute("height", `${height}px`);
      }}
      wrapper="svg"
    />
  );
};
