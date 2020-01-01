import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <Text>Recipes</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Recipes',
  header: { visible:false }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 40,
  },
  
});
