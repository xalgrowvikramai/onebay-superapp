import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const LoginScreen = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await login(email, password);
            // Navigate to the home screen or show success message
        } catch (error) {
            Alert.alert('Login Failed', error.message);
        }
    };

    return (
        <View className="flex-1 justify-center items-center p-4">
            <Text className="text-2xl mb-4">Login</Text>
            <TextInput
                className="border border-gray-300 rounded p-2 mb-4 w-full"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                className="border border-gray-300 rounded p-2 mb-4 w-full"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;