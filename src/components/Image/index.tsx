import React from "react";
import { Svg } from "../Svg";
import {
  Image as RNImage,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";

export interface ImageProps {
  source: ImageSourcePropType;
  height: number;
  width: number;
  style?: StyleProp<ImageStyle>;
}

export const Image = ({ source, height, width, style }: ImageProps) => {
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
    return <Svg uri={source.uri} height={height} width={width} />;
  }

  return (
    <RNImage
      source={{
        ...source,
        height,
        width,
      }}
      style={style}
    />
  );
};
