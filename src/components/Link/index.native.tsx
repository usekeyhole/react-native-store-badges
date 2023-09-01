import React from "react";
import { Linking, TouchableOpacity } from "react-native";

export const Link = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <TouchableOpacity
      disabled={!href}
      onPress={() => {
        if (!href) return;
        Linking.openURL(href);
      }}
    >
      {children}
    </TouchableOpacity>
  );
};
