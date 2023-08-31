import { SvgLoader } from "../SvgLoader";
import { Image as RNImage, ImageSourcePropType } from "react-native";

export interface ImageProps {
  source: ImageSourcePropType;
  height: number;
  width: number;
}

export const Image = ({ source, height, width }: ImageProps) => {
  if (Array.isArray(source)) {
    return (
      <>
        {source.map((uri, index) => (
          <Image key={index} source={uri} height={height} width={width} />
        ))}
      </>
    );
  }

  if (typeof source === "number") {
    return <RNImage source={source} height={height} width={width} />;
  }

  if (source.uri?.endsWith(".svg")) {
    return <SvgLoader uri={source.uri} height={height} />;
  }

  return (
    <RNImage
      source={{
        ...source,
        height,
        width,
      }}
    />
  );
};
