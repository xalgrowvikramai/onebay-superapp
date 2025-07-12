import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductScreen = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add to Cart" onPress={() => {/* Add to cart functionality */}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        marginVertical: 4,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
    },
});

export default ProductScreen;