import React from 'react';

const ProviderDashboard: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Provider Dashboard</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Welcome, Provider!</h2>
                <p className="mb-4">Here you can manage your services, view analytics, and handle customer interactions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                        <h3 className="font-semibold">Manage Services</h3>
                        <p>Update, add, or remove your services.</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                        <h3 className="font-semibold">View Analytics</h3>
                        <p>Check your performance metrics and customer feedback.</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg">
                        <h3 className="font-semibold">Customer Interactions</h3>
                        <p>Respond to customer inquiries and manage bookings.</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg">
                        <h3 className="font-semibold">Settings</h3>
                        <p>Update your profile and preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderDashboard;