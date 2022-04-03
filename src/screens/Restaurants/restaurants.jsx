import { SafeAreaView, View, FlatList } from "react-native";
import { SearchBar } from "../../components/SearchBar/search-bar";
import { styles } from "./restaurants.styles";
import { RestaurantInfo } from "./components/RestaurantInfo/restaurant-info";

export const Restaurants = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={({ item }) => (
          <View style={styles.listWrapper}>
            <RestaurantInfo restaurant={item} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
