import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AdminPanel = () => {
    const handleUserManagement = () => {
        // Logic for user management
    };

    const handleProductManagement = () => {
        // Logic for product management
    };

    const handleOrderManagement = () => {
        // Logic for order management
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Panel</Text>
            <Button title="Manage Users" onPress={handleUserManagement} />
            <Button title="Manage Products" onPress={handleProductManagement} />
            <Button title="Manage Orders" onPress={handleOrderManagement} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default AdminPanel;