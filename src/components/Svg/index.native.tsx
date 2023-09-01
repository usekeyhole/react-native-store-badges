import React from "react";
import { SvgFromUri } from "react-native-svg";

export const Svg = ({
  uri,
  height,
  width,
}: {
  uri: string;
  height: number;
  width: number;
}) => {
  return <SvgFromUri uri={uri} height={height} width={width} />;
};
