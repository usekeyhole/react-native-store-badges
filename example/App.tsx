import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { StoreBadge } from "react-native-store-badges";

export default function App() {
  const badgeHeight = 50;
  const locale = "da-DK";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Example App</Text>
        <View style={styles.badgesContainer}>
          <StoreBadge
            platform="ios"
            href="https://github.com/usekeyhole/react-native-store-badges"
            height={badgeHeight}
            locale={locale}
          />
          <StoreBadge
            platform="android"
            href="https://github.com/usekeyhole/react-native-store-badges"
            height={badgeHeight}
            locale={locale}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
  },
  badgesContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
