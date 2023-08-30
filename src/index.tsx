import { View, StyleSheet, Text } from "react-native";

export function AppStoreBadge() {
  return (
    <View style={styles.container}>
      <Text>App Store Badge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
