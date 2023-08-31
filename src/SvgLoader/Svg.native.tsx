import { SvgFromUri } from "react-native-svg";
import { SvgProps } from ".";

export const Svg = ({ uri, height }: SvgProps) => {
  return <SvgFromUri uri={uri} height={height} width="auto" />;
};
