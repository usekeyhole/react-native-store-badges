import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StoreBadge } from "react-native-store-badges";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Default (height: 40)</Text>
      <View style={styles.row}>
        <StoreBadge platform="ios" />
        <StoreBadge platform="android" />
      </View>

      <Text style={styles.heading}>Large (height: 60)</Text>
      <View style={styles.row}>
        <StoreBadge platform="ios" height={60} />
        <StoreBadge platform="android" height={60} />
      </View>

      <Text style={styles.heading}>Small (height: 30)</Text>
      <View style={styles.row}>
        <StoreBadge platform="ios" height={30} />
        <StoreBadge platform="android" height={30} />
      </View>

      <Text style={styles.heading}>With href</Text>
      <View style={styles.row}>
        <StoreBadge platform="ios" href="https://apps.apple.com" />
        <StoreBadge platform="android" href="https://play.google.com" />
      </View>

      <Text style={styles.heading}>Locale: fr-FR</Text>
      <View style={styles.row}>
        <StoreBadge platform="ios" locale="fr-FR" />
        <StoreBadge platform="android" locale="fr-FR" />
      </View>

      <Text style={styles.heading}>Locale: de-DE</Text>
      <View style={styles.row}>
        <StoreBadge platform="ios" locale="de-DE" />
        <StoreBadge platform="android" locale="de-DE" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
});
