import React from 'react';
import { FaUsers, FaFileContract, FaClipboardList, FaWarehouse, FaFileInvoice, FaTruck, FaUserFriends, FaBox, FaChartBar, FaCog, FaArrowLeft, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { BsFilter } from 'react-icons/bs';

const QuotesPage = () => {
  const quotes = [
    { quoteNo: 'QN-1000-2025', date: '21-01-2025', customer: 'Name Here', category: 'MHE', location: 'North', value: 'PKR 1,000,000' },
    { quoteNo: 'QS-1001-2025', date: '21-01-2025', customer: 'Name Here', category: 'Batteries', location: 'South', value: 'USD 10,000' },
    { quoteNo: 'QN-1002-2025', date: '21-01-2025', customer: 'Name Here', category: 'Attachments', location: 'Karachi', value: 'PKR 1,000,000' },
    { quoteNo: 'QN-1003-2025', date: '21-01-2025', customer: 'Name Here', category: 'Parts', location: 'Lahore', value: 'PKR 1,000,000' },
    { quoteNo: 'QN-1004-2025', date: '21-01-2025', customer: 'Name Here', category: 'Tyres', location: 'Islamabad', value: 'PKR 1,000,000' },
  ];

  const menuItems = [
    { label: 'Dashboard', icon: <FaClipboardList /> },
    { label: 'Users', icon: <FaUsers /> },
    { label: 'Contracts', icon: <FaFileContract /> },
    { label: 'Orders', icon: <FaClipboardList /> },
    { label: 'Inventory', icon: <FaWarehouse /> },
    { label: 'Quotes', icon: <FaFileInvoice /> },
    { label: 'Suppliers', icon: <FaTruck /> },
    { label: 'Customers', icon: <FaUserFriends /> },
    { label: 'Products', icon: <FaBox /> },
    { label: 'Reports', icon: <FaChartBar /> },
    { label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <aside className="w-full lg:w-64 bg-[#2E4482] text-white flex flex-col justify-between">
        <div>
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold">KZK</h1>
            <p className="text-xs">ESTB-1994</p>
          </div>
          <ul className="space-y-1 px-4">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                  item.label === 'Quotes' ? 'bg-white text-[#2E4482]' : 'hover:bg-blue-600'
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#1B2B5D] text-center py-3 text-sm">Zeeshan Karimi</div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <FaArrowLeft className="text-xl cursor-pointer" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Zeeshan Karimi</span>
              <img src="/user.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          <h2 className="text-2xl text-[#344B91] font-bold mb-4">Quotes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-xs text-gray-500">Total Value</p>
              <h3 className="text-xl font-semibold">PKR 1,000,000</h3>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-xs text-gray-500">No Of Quotations</p>
              <h3 className="text-xl font-semibold">52</h3>
            </div>
          </div>

          {/* Date filters moved above and aligned to the right */}
          <div className="flex justify-end gap-4 mb-4">
            <div className="flex gap-2 items-center">
              <input type="date" className="border px-2 py-1 rounded-md text-sm" />
              <span>-</span>
              <input type="date" className="border px-2 py-1 rounded-md text-sm" />
            </div>
          </div>

          <div className="flex gap-2 items-center mb-4">
            <div className="flex items-center gap-2 flex-1 relative">
              <FaSearch className="absolute ml-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search User"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full"
              />
            </div>
            <button className="bg-[#2E4482] text-white px-4 py-2 rounded-md text-sm">Create</button>
          </div>

          <div className="overflow-auto rounded-lg shadow">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3 text-left">Quote #</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Product Category</th>
                  <th className="p-3 text-left">Location</th>
                  <th className="p-3 text-left">Value</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{quote.quoteNo}</td>
                    <td className="p-3">{quote.date}</td>
                    <td className="p-3">{quote.customer}</td>
                    <td className="p-3">{quote.category}</td>
                    <td className="p-3">{quote.location}</td>
                    <td className="p-3">{quote.value}</td>
                    <td className="p-3 flex gap-2">
                      <FaEdit className="text-gray-500 cursor-pointer" />
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-6 py-3 bg-white shadow text-sm mt-auto">
  <div className="flex justify-between items-center">
    <p>Showing 1 to 10 of 50 entries</p>
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
      <button className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
    </div>
  </div>
</div>

      </main>
    </div>
  );
};

export default QuotesPage;
