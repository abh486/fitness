import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import screens
import Location from '../screens/Member/Location';
import Activity from '../screens/Member/Activity';
import Community from '../screens/Member/Community';
import Store from '../screens/Member/Store';
import Profile from '../screens/Member/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
                   screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                 let iconName;
       
                 if (route.name === 'Location') {
                   iconName = focused ? 'location' : 'location-outline';
                 } else if (route.name === 'Activity') {
                   iconName = focused ? 'fitness' : 'fitness-outline';
                 } else if (route.name === 'Community') {
                   iconName = focused ? 'people' : 'people-outline';
                 } else if (route.name === 'Store') {
                   iconName = focused ? 'bag' : 'bag-outline';
                 } else if (route.name === 'Profile') {
                   iconName = focused ? 'person' : 'person-outline';
                 }
       
                 return <Icon name={iconName} size={size} color={color} />;
               },
        tabBarActiveTintColor: '#e74c3c',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 85 : 70,
          paddingHorizontal: 10,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Location" 
        component={Location}
        options={{
          title: 'Location',
        }}
      />
      <Tab.Screen 
        name="Activity" 
        component={Activity}
        options={{
          title: 'Activity',
        }}
      />
      <Tab.Screen 
        name="Community" 
        component={Community}
        options={{
          title: 'Community',
        }}
      />
      <Tab.Screen 
        name="Store" 
        component={Store}
        options={{
          title: 'Store',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator; 