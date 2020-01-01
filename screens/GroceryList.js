import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class GroceryList extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>Grocery List</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 40,
  },
  
});