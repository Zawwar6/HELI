import React from 'react';
import { FaUsers, FaPen, FaTrash } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';

const UsersPage = () => {
  const users = [
    { name: 'Zeeshan Karimi', email: 'info@helipakistan.com', department: 'Admin', role: 'Role', access: true },
    { name: 'Write Name Here', email: 'info@helipakistan.com', department: 'Admin', role: 'Role', access: true },
    { name: 'Write Name Here', email: 'info@helipakistan.com', department: 'Admin', role: 'Role', access: false },
    { name: 'Write Name Here', email: 'info@helipakistan.com', department: 'Admin', role: 'Role', access: false },
    { name: 'Write Name Here', email: 'info@helipakistan.com', department: 'Admin', role: 'Role', access: false },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-[#2E4482] text-white flex flex-col justify-between">
        <div>
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold">KZK</h1>
            <p className="text-xs">ESTB-1994</p>
          </div>
          <ul className="space-y-2 px-4">
            {['Dashboard', 'Users', 'Contracts', 'Orders', 'Inventory', 'Quotes', 'Suppliers', 'Customers', 'Products', 'Reports', 'Settings'].map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                  item === 'Users' ? 'bg-white text-[#2E4482]' : 'hover:bg-blue-600'
                }`}
              >
                <FaUsers />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#1B2B5D] text-center py-3 text-sm">Zeeshan Karimi</div>
      </div>

      {/* Main Content with bottom pagination */}
      <div className="flex-1 flex flex-col">
        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4">
            <BsArrowLeft size={20} />
            <div className="flex gap-2 items-center">
              <span className="text-sm">Zeeshan Karimi</span>
              <img src="/user.jpg" alt="profile" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-4">Users</h2>

          {/* Search & Add */}
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <input
              type="text"
              placeholder="Search User"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-[#2E4482] text-white px-4 py-2 rounded-md text-sm">+ Add</button>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="min-w-full bg-white text-sm text-left rounded-lg shadow">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">System Access</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.department}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={user.access} />
                        <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-[#2E4482] transition-all"></div>
                      </label>
                    </td>
                    <td className="p-3 flex gap-2">
                      <FaPen className="text-gray-500 cursor-pointer" />
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 bg-white shadow text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-2 sm:mb-0">Showing 1 to 10 of 50 entries</p>
            <div className="flex items-center gap-2">
              <span>Display</span>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <button className="px-2 py-1 bg-gray-200 rounded">&lt;</button>
              <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-2 py-1 bg-gray-200 rounded">2</button>
              <button className="px-2 py-1 bg-gray-200 rounded">3</button>
              <button className="px-2 py-1 bg-gray-200 rounded">4</button>
              <button className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
