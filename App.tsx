import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.redContainer}>
      <View style={styles.blackContainer}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>#crushing it</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  redContainer: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  },

  blackContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },

  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 40,
    backgroundColor: 'red',
    color: 'white'
  }
});
