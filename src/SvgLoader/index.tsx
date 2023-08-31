import { Svg } from "./Svg";

export interface SvgProps {
  uri: string;
  height: number;
}

export const SvgLoader = (props: SvgProps) => {
  return <Svg {...props} />;
};
