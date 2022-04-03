import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.quaternary,
    marginTop: StatusBar.currentHeight,
  },
  searchWrapper: {
    padding: 16,
  },
  listWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
