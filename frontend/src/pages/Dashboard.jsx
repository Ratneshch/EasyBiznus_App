import React from "react";
import { Menu, Search, Bell, Settings, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Top Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Easybiznus</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Settings className="h-6 w-6" />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-red-500 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome back, {user?.firstName}!
            </h2>
            <p className="text-gray-500 mt-1">
              Here's what's happening with your business today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Turnover</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">₹0</p>
              <p className="text-sm text-gray-500 mt-1">Units</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-500">Commission</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">₹0</p>
              <p className="text-sm text-gray-500 mt-1">Units</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-sm text-gray-500 mt-1">Today</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-500">Overdues</h3>
              <p className="text-3xl font-bold text-red-500 mt-2">0</p>
              <p className="text-sm text-gray-500 mt-1">Pending</p>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
              <button className="text-blue-500 hover:text-blue-600">View all</button>
            </div>
            <div className="text-center py-8 text-gray-500">
              No sales data available
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen bg-white">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/90 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-colors shadow-lg"
              >
                Logout
              </button>
              <Menu className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors pl-12"
            />
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Total Turnover</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-xs text-gray-500 mt-1">Units</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Commission</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-xs text-gray-500 mt-1">Units</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
            <p className="text-sm text-gray-500 mb-4">Daily Queue</p>
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-700">Total Orders</p>
              <p className="text-gray-700">0 Unit</p>
            </div>
            <p className="text-red-500 text-sm font-medium">OVERDUES 0</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-900 mb-4">Sales</p>
            <p className="text-gray-500">No items found.</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around py-4">
            <button className="flex flex-col items-center text-blue-500">
              <p className="text-xl">🏠</p>
              <p className="text-xs mt-1">Home</p>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors">
              <p className="text-xl">🛒</p>
              <p className="text-xs mt-1">Buy</p>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors">
              <p className="text-xl">📦</p>
              <p className="text-xs mt-1">Sell</p>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors">
              <p className="text-xl">👤</p>
              <p className="text-xs mt-1">Profile</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
