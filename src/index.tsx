import React, { HTMLAttributeAnchorTarget } from "react";
import { View, ViewStyle } from "react-native";
import { Image } from "./components/Image";
import { Link } from "./components/Link";

export type PlatformType = "ios" | "android";

export type Locale = {
  language: string;
  country: string;
};

export interface StoreBadgeProps {
  platform: PlatformType;
  height?: number;
  locale?: string;
  href?: string;
  style?: ViewStyle;
  target?: HTMLAttributeAnchorTarget;
}

export const StoreBadge = ({
  platform,
  locale: localeProp,
  height = 40,
  href,
  target = "_blank",
  style,
}: StoreBadgeProps) => {
  const locale = getLocale(localeProp);

  return (
    <View
      style={[
        {
          padding: height / 4,
        },
        style,
      ]}
    >
      <Link href={href} target={target}>
        <Image
          source={{
            uri: getUri(platform, locale),
          }}
          width={getWidth(platform, height)}
          height={height}
          style={{
            overflow: "hidden",
            transform: getScales(platform, locale),
          }}
        />
      </Link>
    </View>
  );
};

const LANGUAGE_SCALES: {
  [key in PlatformType]: {
    [key: string]: {
      x: number;
      y: number;
    };
  };
} = {
  android: {
    en: {
      x: 1.15,
      y: 1.15,
    },
  },
  ios: {},
};

const PLAY_STORE_WIDTH_RATIO = 3.3;
const APP_STORE_WIDTH_RATIO = 2.99;
const getWidth = (platform: PlatformType, height: number) => {
  return platform === "ios"
    ? height * APP_STORE_WIDTH_RATIO
    : height * PLAY_STORE_WIDTH_RATIO;
};

const getLocale = (localeArg?: string): Locale => {
  const locale = localeArg || navigator?.language || "en-US";
  const [language, country] = locale.split("-");

  switch (language) {
    case "no" || "nb" || "nn":
      return {
        language: "no",
        country: "NO",
      };
    default:
      if (language && country) {
        return {
          language,
          country,
        };
      }

      return {
        language: "en",
        country: "US",
      };
  }
};

const getScales = (platform: PlatformType, locale: Locale) => {
  const scaleX = LANGUAGE_SCALES[platform][locale.language]?.x || 1;
  const scaleY = LANGUAGE_SCALES[platform][locale.language]?.y || 1;
  return `scaleX(${scaleX}) scaleY(${scaleY})`;
};

const getUri = (platform: PlatformType, locale: Locale) => {
  const localeStr = `${locale.language}-${locale.country}`;

  const uri =
    platform === "ios"
      ? `https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/${localeStr.toLowerCase()}.svg`
      : `https://play.google.com/intl/en-US/badges/static/images/badges/${locale.language}_badge_web_generic.png`;

  return uri;
};
