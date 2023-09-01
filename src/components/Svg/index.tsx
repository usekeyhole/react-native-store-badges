import React from "react";
import { ReactSVG } from "react-svg";

export const Svg = ({
  uri,
  height,
  width,
}: {
  uri: string;
  height: number;
  width: number;
}) => {
  return (
    <ReactSVG
      src={uri}
      style={{
        height,
        width,
      }}
      afterInjection={(svg) => {
        svg.setAttribute("width", `${width}px`);
        svg.setAttribute("height", `${height}px`);
      }}
    />
  );
};
