import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import ReelScreen from '../screens/reel';
import ShopScreen from '../screens/shop';
import ProfileScreen from '../screens/profile';
import {SCREENS} from '../utils/router';
import { Image, StyleSheet } from 'react-native';
import { 
  Home,
  HomeFiled,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
} from '../utils/icons';

import posts from '../utils/post'; 

// Find the post with id: 18
const selectedPost = posts.find(post => post.id === 18);
const userAvatar = selectedPost?.user?.avatar; // Get user avatar



const TabNavigation = createBottomTabNavigator();

const {HOMESCREEN, PROFILESCREEN, SEARCHSCREEN, REELSCREEN, SHOPSCREEN} =
  SCREENS;

const BottomTabsNavigation = () => {
  return (
    <TabNavigation.Navigator screenOptions={{headerShown: false}}>
      <TabNavigation.Screen
        options={{
          tabBarIcon: ({focused})=> focused ? <HomeFiled size={30} /> : <Home size={30} />
        }}
        name={HOMESCREEN} 
        component={HomeScreen} />

      <TabNavigation.Screen 
      options={{
          tabBarIcon: ({focused})=> focused ? <SearchField size={30} /> : <Search size={30} />
        }}
      name={SEARCHSCREEN} 
      component={SearchScreen} />

      <TabNavigation.Screen 
      options={{
        tabBarIcon: ({focused})=> focused ? <ReelField size={30} /> : <Reel size={30} />
      }}
      name={REELSCREEN} 
      component={ReelScreen} />

      <TabNavigation.Screen 
      options={{
        tabBarIcon: ({focused})=> focused ? <ShopField size={30} /> : <Shop size={30} />
      }}
      name={SHOPSCREEN} 
      component={ShopScreen} />


      <TabNavigation.Screen 
      options={{
        tabBarIcon: focused => (
        <Image 
          style = {[
          styles.avatar,
          {borderColor: focused ?  '#000' : 'transparent'},
          ]}
          source={require('../assets/profile.png')}
        />  
        ),
      }}
      name={PROFILESCREEN} 
      component={ProfileScreen} 
      />
    </TabNavigation.Navigator>
  );
};


export default BottomTabsNavigation;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  } ,
})