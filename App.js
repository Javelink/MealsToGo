import React from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import { SearchBar } from "./src/components/SearchBar/search-bar";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.searchWrapper}>
          <SearchBar />
        </View>
        <View style={styles.listWrapper}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="default" />
    </>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "blue",
    padding: 16,
  },
});
