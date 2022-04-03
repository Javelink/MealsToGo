import {StyleSheet, SafeAreaView, View, Text, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.searchWrapper}>
          <Text>search</Text>
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
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
  searchWrapper: {
    backgroundColor: 'green',
    padding: 16,
  },
  listWrapper: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});
