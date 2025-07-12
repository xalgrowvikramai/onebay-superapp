import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useCart } from '../hooks/useCart';

const CartScreen = () => {
    const { cartItems, totalAmount, clearCart } = useCart();

    const renderCartItem = ({ item }) => (
        <View className="flex-row justify-between p-4 border-b">
            <Text className="text-lg">{item.name}</Text>
            <Text className="text-lg">${item.price.toFixed(2)}</Text>
        </View>
    );

    return (
        <View className="flex-1 bg-white">
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <View className="p-4">
                        <Text className="text-2xl font-bold">Your Cart</Text>
                        <Text className="text-lg">Total: ${totalAmount.toFixed(2)}</Text>
                    </View>
                }
            />
            <Button title="Clear Cart" onPress={clearCart} />
        </View>
    );
};

export default CartScreen;