import { SafeAreaView, View } from "react-native";
import { SearchBar } from "../../components/SearchBar/search-bar";
import { styles } from "./restaurants.styles";
import { RestaurantInfo } from "./components/RestaurantInfo/restaurant-info";

export const Restaurants = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
      <View style={styles.listWrapper}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};
