import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Samuel Green', age: 23, occupation: 'Marketer' },
    { id: 4, name: 'Emily White', age: 45, occupation: 'Manager' },
  ];

  const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-2xl" style={{ height: '400px' }}>
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">Search & Filter Table</h1>

          {/* Search bar settings */}
          <div className="mb-4">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Table settings */}
          <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: '280px' }}>
            <table className="min-w-full table-auto bg-gray-100 shadow-md rounded-lg">
              <thead>
              <tr>
                <th className="px-2 md:px-4 py-2 bg-blue-500 text-white text-sm md:text-base">ID</th>
                <th className="px-2 md:px-4 py-2 bg-blue-500 text-white text-sm md:text-base">Name</th>
                <th className="px-2 md:px-4 py-2 bg-blue-500 text-white text-sm md:text-base">Age</th>
                <th className="px-2 md:px-4 py-2 bg-blue-500 text-white text-sm md:text-base">Occupation</th>
              </tr>
              </thead>
              <tbody>
              {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className="border px-2 md:px-4 py-2 text-sm md:text-base">{item.id}</td>
                        <td className="border px-2 md:px-4 py-2 text-sm md:text-base">{item.name}</td>
                        <td className="border px-2 md:px-4 py-2 text-sm md:text-base">{item.age}</td>
                        <td className="border px-2 md:px-4 py-2 text-sm md:text-base">{item.occupation}</td>
                      </tr>
                  ))
              ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 border">No results found</td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default App;
