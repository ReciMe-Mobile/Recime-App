import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import { FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryCard = (props) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={props.icon} size={60} color="black" />
      <Text style={styles.text}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    width: 150,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
  }
})

export default connect(null)(CategoryCard)
