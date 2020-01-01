import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  Animated
} from 'react-native'
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import {connect} from 'react-redux'
import {addCategory} from '../redux/categories'

class AddButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      pressStatus: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      name: '',
      name: '',
      icon: '',
      showError: false,
      order: this.props.categories.length + 1
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  mode = new Animated.Value(0)
  buttonSize = new Animated.Value(1)

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  togglePress = (icon, index) => {
    let currentState = this.state.pressStatus
    if (currentState.includes(true)) {
      currentState = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
    currentState = [
      ...currentState.slice(0, index),
      true,
      ...currentState.slice(index + 1)
    ]
    this.setState({ pressStatus: currentState, icon })
  }

  async handleAdd() {
    if (!this.state.name || !this.state.icon) {
      this.setState({ showError: true })
    } else {
      console.log('orderrrrr', this.state.order)
      await this.props.addCategoryThunk(this.state.name, this.state.icon, this.state.order)
      this.handlePress()
      this.setState({
        modalVisible: false,
        pressStatus: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ],
        name: '',
        icon: '',
        showError: false
      })
    }
  }

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.9,
        duration: 200
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0
      })
    ]).start()
  }

  render() {
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100]
    })

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
    })

    const timeX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24]
    })

    const timeY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150]
    })

    const pulseX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50]
    })

    const pulseY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
    })

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    })

    const sizeStyle = {
      transform: [{ scale: this.buttonSize }]
    }

    return (
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <Animated.View
          style={{
            position: 'absolute',
            left: thermometerX,
            top: thermometerY
          }}
        >
          <View style={styles.secondaryButton}>
            <Feather name='upload' size={24} color='#FFF' />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: 'absolute', left: timeX, top: timeY }}
        >
          <View style={styles.secondaryButton}>
            <Feather name='camera' size={24} color='#FFF' />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: 'absolute', left: pulseX, top: pulseY }}
        >
          <TouchableHighlight underlayColor='#FF0087'>
            <View style={styles.secondaryButton}>
              <Feather
                onPress={() => this.toggleModal()}
                name='folder-plus'
                size={24}
                color='#FFF'
              />
            </View>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableHighlight
            onPress={this.handlePress}
            underlayColor='#FF0087'
          >
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <FontAwesome5 name='plus' size={24} color='#FFF' />
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>

        {/* Modal to add a new category */}
        <Modal
          testID={'modal'}
          propagateSwipe
          isVisible={this.state.modalVisible}
          style={styles.view}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <ScrollView style={styles.modalContent}>
            <Text style={styles.title}>ADD A CATEGORY</Text>
            <View>
              <TextInput
                placeholder='Category name'
                placeholderTextColor='#4D4D4D'
                onChangeText={text => this.setState({ name: text })}
                value={this.state.name}
                style={styles.input}
              />
            </View>
            <View style={styles.icons}>
              <View
                style={
                  this.state.pressStatus[0]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('food-apple', 0)}
                  size={60}
                  color='black'
                  name='food-apple'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[1]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('bowl', 1)}
                  size={60}
                  color='black'
                  name='bowl'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[2]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('rice', 2)}
                  size={60}
                  color='black'
                  name='rice'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[3]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('carrot', 3)}
                  size={60}
                  color='black'
                  name='carrot'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[4]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('cookie', 4)}
                  size={60}
                  color='black'
                  name='cookie'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[5]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('corn', 5)}
                  size={60}
                  color='black'
                  name='corn'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[6]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('food-croissant', 6)}
                  size={60}
                  color='black'
                  name='food-croissant'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[7]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('cupcake', 7)}
                  size={60}
                  color='black'
                  name='cupcake'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[8]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('fish', 8)}
                  size={60}
                  color='black'
                  name='fish'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[9]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('hamburger', 9)}
                  size={60}
                  color='black'
                  name='hamburger'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[10]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('silverware-variant', 10)}
                  size={60}
                  color='black'
                  name='silverware-variant'
                />
              </View>
              <View
                style={
                  this.state.pressStatus[11]
                    ? styles.pressed
                    : styles.iconContainer
                }
              >
                <MaterialCommunityIcons
                  onPress={() => this.togglePress('beer', 11)}
                  size={60}
                  color='black'
                  name='beer'
                />
              </View>
            </View>
            {this.state.showError ? (
              <Text style={styles.error}>
                Please make sure your new category has a name and icon
              </Text>
            ) : null}
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={this.handleAdd}>
                <Text style={styles.btnText}>Add</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FF0087',
    position: 'absolute',
    marginTop: -60,
    shadowColor: '#FF42A6',
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#FFFFFF'
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF0087'
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 350,
    marginBottom: 100,
    marginTop: 100,
    marginLeft: 30,
    borderRadius: 35
  },
  modalContent: {
    flex: 1,
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    marginTop: 30,
    fontSize: 18,
    color: '#FF0087',
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    marginTop: 30,
    width: 275,
    padding: 10,
    color: '#000000',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dadada',
    alignSelf: 'center'
  },
  icons: {
    marginTop: 20,
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  iconContainer: {
    backgroundColor: '#F6F6F6',
    width: 100,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10
  },
  pressed: {
    backgroundColor: '#F6F6F6',
    width: 100,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
    borderColor: '#FF0087',
    borderWidth: 3
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: '23%',
    padding: 15,
    width: 200,
    display: 'flex',
    borderRadius: 25,
    backgroundColor: '#FF0087',
    alignSelf: 'center'
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'white',
    fontWeight: 'bold'
  },
  error: {
    color: '#FF0087',
    margin: 10
  }
})

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = dispatch => ({
  addCategoryThunk: (name, icon) => dispatch(addCategory(name, icon)) 
})

export default connect(mapState, mapDispatch)(AddButton)
