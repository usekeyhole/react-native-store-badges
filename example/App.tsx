import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { AppStoreBadge } from "react-native-store-badges";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My Example App</Text>
      <AppStoreBadge />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
