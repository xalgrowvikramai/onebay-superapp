import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to OneBay</h1>
            <p className="text-lg text-center mb-8">
                Your one-stop solution for all your needs. Explore our features and services!
            </p>
            <div className="flex flex-wrap justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                    Get Started
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-green-600">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Home;