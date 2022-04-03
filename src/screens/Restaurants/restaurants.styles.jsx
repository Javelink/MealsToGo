import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  searchWrapper: {
    padding: 16,
  },
  listWrapper: {
    flex: 1,
    padding: 16,
  },
});
