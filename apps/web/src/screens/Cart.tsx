import React from 'react';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../types';

const Cart: React.FC = () => {
    const { cartItems, total, removeFromCart } = useCart();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map((item: CartItem) => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="font-semibold">Total: ${total.toFixed(2)}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;