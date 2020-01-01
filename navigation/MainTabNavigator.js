import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoriesScreen from '../screens/CategoriesScreen'

import WelcomeScreen from '../screens/WelcomeScreen'
import { createSwitchNavigator } from 'react-navigation';
import FavoritesScreen from '../screens/FavoritesScreen';
import GroceryList from '../screens/GroceryList'
import CalendarScreen from '../screens/CalendarScreen'
import AddButton from '../components/AddButton'
import AddCategory from '../components/AddCategory'

const HomeNav = createMaterialTopTabNavigator({
  Categories: CategoriesScreen,
  Recipes: HomeScreen,
  Favorites: FavoritesScreen,
  Grocery: GroceryList,
}, {
  tabBarOptions: {
    style: {
      paddingTop: 20,
      backgroundColor: '#F6F6F6',
    },
    activeTintColor: 'black',
    inactiveTintColor: '#909090',
    scrollEnabled: true,
    indicatorStyle: {
      borderBottomWidth: 2,
      borderBottomColor: '#FF0087',
  },
  }
})

const HomeStack = createStackNavigator(
  {
    Categories: HomeNav,
  }, 
  {
    defaultNavigationOptions: {
      headerStyle: {
        display: 'none'
      }
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Recipes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = 'HomeNav';

// const AddStack = createStackNavigator(
//   {
//     Add: { screen: () => null,
//       navigationOptions: <AddButton />,
//  },
// })

const GroceryStack = createStackNavigator(
  {
    Grocery: GroceryList
  }, 
  {
    headerMode: 'none',
  }
)

GroceryStack.navigationOptions = {
  tabBarLabel: 'Grocery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focued={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  )
}

GroceryStack.path = ''

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen
  },
  {
    headerMode: 'none',
  }
)

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  )
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    headerMode: 'none',
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GroceryStack,
  Add: { 
    screen: () => null,
    navigationOptions: { 
      tabBarIcon: <AddButton />,
      tabBarLabel: ' '
    }
  },
  CalendarStack,
  ProfileStack,
});


tabNavigator.path = '';

const MainNav = createSwitchNavigator({
  tabNavigator,
  HomeNav,
  AddCategory: {
    screen: AddCategory
  }
})

export default MainNav;
