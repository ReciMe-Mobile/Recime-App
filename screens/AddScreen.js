import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Modal from "react-native-modal"

export default class AddScreen extends React.Component {

  state = {
    isVisible: true
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    return (
      <Modal isVisible={this.state.isVisible} style={styles.view}
          onBackdropPress={() => this.setState({ isVisible: false })}
      >
        <View>
          <Text>Add recipe from library</Text>
        </View>
        <View>
          <Text>Take photo of recipe</Text>
        </View>
        <View>
          <Text>Add category</Text>
        </View>
      </Modal>
    )
  }
}

AddScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    height: 200,
  }
})
