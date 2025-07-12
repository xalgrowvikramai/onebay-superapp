import React from 'react';
import { View, Text, Button } from 'react-native';

const ProviderDashboard = () => {
    const handleManageProducts = () => {
        // Logic to manage products
    };

    const handleViewOrders = () => {
        // Logic to view orders
    };

    return (
        <View className="flex-1 items-center justify-center p-4">
            <Text className="text-2xl font-bold mb-4">Provider Dashboard</Text>
            <Button title="Manage Products" onPress={handleManageProducts} />
            <Button title="View Orders" onPress={handleViewOrders} className="mt-4" />
        </View>
    );
};

export default ProviderDashboard;