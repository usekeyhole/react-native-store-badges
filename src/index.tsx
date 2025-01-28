import React, { HTMLAttributeAnchorTarget } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { Image } from "./components/Image";
import { Link } from "./components/Link";

export type PlatformType = "ios" | "android";

export type BadgeScale = {
  x?: number;
  y?: number;
};

export type Locale = {
  language: string;
  country: string;
};

export interface StoreBadgeProps {
  platform: PlatformType;
  height?: number;
  locale?: LocaleISO | (string & {});
  href?: string;
  style?: ViewStyle;
  target?: HTMLAttributeAnchorTarget;
  customScale?: BadgeScale;
}

export const StoreBadge = ({
  platform,
  locale: localeProp,
  height = 40,
  href,
  target = "_blank",
  style,
  customScale,
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
            transform: getScales(platform, locale, customScale),
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
    case "no":
    case "nb":
    case "nn":
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

const getScales = (
  platform: PlatformType,
  locale: Locale,
  customScale?: BadgeScale,
) => {
  let scaleX =
    customScale?.x || LANGUAGE_SCALES[platform][locale.language]?.x || 1;

  let scaleY =
    customScale?.y || LANGUAGE_SCALES[platform][locale.language]?.y || 1;

  if (platform === "ios") {
    scaleX += 0.1;
    scaleY += 0.1;
  }

  return Platform.OS === "web"
    ? `scaleX(${scaleX}) scaleY(${scaleY})`
    : [
        {
          scaleX,
        },
        {
          scaleY,
        },
      ];
};

const getUri = (platform: PlatformType, locale: Locale) => {
  const uri =
    platform === "ios"
      ? `https://raw.githubusercontent.com/usekeyhole/react-native-store-badges/refs/heads/feature/host-app-store/img/app-store/${locale.country.toLowerCase()}.svg`
      : `https://play.google.com/intl/en-US/badges/static/images/badges/${locale.language}_badge_web_generic.png`;

  return uri;
};

export type LocaleISO =
  | "id-ID"
  | "ms-MY"
  | "cs-CZ"
  | "da-DK"
  | "de-DE"
  | "et-EE"
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "it-IT"
  | "lv-LV"
  | "lt-LT"
  | "hu-HU"
  | "nl-NL"
  | "no-NO"
  | "nb-NO"
  | "nn-NO"
  | "pl-PL"
  | "pt-PT"
  | "pt-BR"
  | "ru-RU"
  | "ro-RO"
  | "sk-SK"
  | "sl-SI"
  | "fi-FI"
  | "sv-SE"
  | "vi-VN"
  | "tr-TR"
  | "el-GR"
  | "bg-BG"
  | "th-TH"
  | "ko-KR"
  | "ja-JP";
