import React, { HTMLAttributeAnchorTarget } from "react";
import { Linking, Platform, TouchableOpacity, ViewStyle } from "react-native";
import { Image } from "./Image";

export type PlatformType = "ios" | "android";

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
  target,
  style,
}: StoreBadgeProps) => {
  const locale = getLocale(localeProp);
  const uri = getUri(platform, locale);
  const width = getWidth(platform, height);
  const isWeb = Platform.OS === "web";

  return (
    <TouchableOpacity
      disabled={!href}
      onPress={() => {
        if (!href) return;

        if (isWeb) window.open(href, target);
        else Linking.openURL(href);
      }}
      style={[
        {
          height,
          width,
          margin: height / 4,
        },
        style,
      ]}
    >
      <Image
        source={{
          uri,
        }}
        width={width}
        height={height}
      />
    </TouchableOpacity>
  );
};

const PLAY_STORE_WIDTH_RATIO = 3.3;
const APP_STORE_WIDTH_RATIO = 2.99;
const getWidth = (platform: PlatformType, height: number) => {
  return platform === "ios"
    ? height * APP_STORE_WIDTH_RATIO
    : height * PLAY_STORE_WIDTH_RATIO;
};

type Locale = {
  language: string;
  country: string;
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

const getUri = (platform: PlatformType, locale: Locale) => {
  const localeStr = `${locale.language}-${locale.country}`;

  const uri =
    platform === "ios"
      ? `https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/${localeStr.toLowerCase()}.svg`
      : `https://play.google.com/intl/en-US/badges/static/images/badges/${locale.language}_badge_web_generic.png`;

  return uri;
};
