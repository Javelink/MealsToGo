import { StyleSheet } from "react-native";
import { fonts } from "../../../../infrastructure/theme/fonts";
import { colors } from "../../../../infrastructure/theme/colors";

export const styles = StyleSheet.create({
  cardWrapper: { padding: 10 },
  title: { fontFamily: fonts.body },
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingWrapper: { flexDirection: "row" },
  closedText: {
    color: colors.error,
    paddingHorizontal: 10,
    fontFamily: fonts.monospace,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});
