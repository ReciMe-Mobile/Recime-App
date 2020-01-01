import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getCategories} from '../redux/categories'
import CategoryCard from '../components/CategoryCard';
import { ScrollView } from 'react-native-gesture-handler';

class CategoriesScreen extends React.Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    console.log(this.props.categories)
    return (
    <View style={styles.container}>
      <ScrollView>
       <View style={styles.categoriesContainer}>
      {
        this.props.categories.length ? this.props.categories.map(category => <CategoryCard name={category.name} icon={category.icon} />) : null
      }
      </View> 
      </ScrollView>
      
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
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    width: '100%',
    paddingRight: 12,
  }
});

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = dispatch => ({
  getCategories: () => dispatch(getCategories())
})

export default connect(mapState, mapDispatch)(CategoriesScreen)