import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const ProfileScreen = () => {
    const { user, logout } = useAuth();

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-2xl font-bold mb-4">Profile</Text>
            {user ? (
                <>
                    <Text className="text-lg">Welcome, {user.name}!</Text>
                    <Button title="Logout" onPress={logout} />
                </>
            ) : (
                <Text className="text-lg">You are not logged in.</Text>
            )}
        </View>
    );
};

export default ProfileScreen;