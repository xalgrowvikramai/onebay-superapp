import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                <p className="text-gray-700">Name: John Doe</p>
                <p className="text-gray-700">Email: johndoe@example.com</p>
                <p className="text-gray-700">Joined: January 1, 2023</p>
            </div>
        </div>
    );
};

export default Profile;