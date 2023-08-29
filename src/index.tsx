import React from "react";
import { View, Image, StyleSheet } from "react-native";

export interface AppStoreBadgeProps {
  width?: number;
  height?: number;
}

export default function AppStoreBadge(props: AppStoreBadgeProps) {
  const locale = "en-us";

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/${locale}.svg`,
        }}
        width={props.width}
        height={props.height}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
