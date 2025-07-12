import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Welcome to OneBay!</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('ProductScreen')}
      />
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('CartScreen')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
};

export default HomeScreen;