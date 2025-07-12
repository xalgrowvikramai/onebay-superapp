import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../utils/api';

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProduct(id);
                setProduct(data);
            } catch (err) {
                setError('Failed to fetch product');
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 text-lg font-semibold">${product.price}</p>
        </div>
    );
};

export default Product;