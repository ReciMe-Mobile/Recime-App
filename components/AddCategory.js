import React from 'react'
import {View, Text, StyleSheet, Modal} from 'react-native'
import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'

class AddCategory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      name: '',
      icon: ''
    }
  }

  render() {
    return (
      <Modal isVisible={this.state.isVisible} style={styles.view}
          onBackdropPress={() => this.setState({ isVisible: false })}
      >
        <View>
          <Text>Add category</Text>
        </View>
      </Modal>
    )
  }
}

AddCategory.navigationOptions = {
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
    marginBottom: 100,
    marginTop: 100
  }
})

export default withNavigation(connect(null)(AddCategory))