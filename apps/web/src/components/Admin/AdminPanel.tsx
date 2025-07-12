import React from 'react';

const AdminPanel: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Users</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">Add User</button>
                
                <h2 className="text-xl font-semibold mt-6 mb-2">Manage Products</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Products</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">Add Product</button>
                
                <h2 className="text-xl font-semibold mt-6 mb-2">Reports</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Reports</button>
            </div>
        </div>
    );
};

export default AdminPanel;