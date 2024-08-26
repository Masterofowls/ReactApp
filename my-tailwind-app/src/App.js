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
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl" style={{ height: '400px' }}>
          <h1 className="text-3xl font-bold text-center mb-6">Search & Filter Table</h1>

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
          <div className="overflow-auto" style={{ maxHeight: '280px' }}>
            <table className="min-w-full table-fixed bg-gray-100 shadow-md rounded-lg">
              <thead>
              <tr>
                <th className="w-1/4 px-4 py-2 bg-blue-500 text-white">ID</th>
                <th className="w-1/4 px-4 py-2 bg-blue-500 text-white">Name</th>
                <th className="w-1/4 px-4 py-2 bg-blue-500 text-white">Age</th>
                <th className="w-1/4 px-4 py-2 bg-blue-500 text-white">Occupation</th>
              </tr>
              </thead>
              <tbody>
              {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.age}</td>
                        <td className="border px-4 py-2">{item.occupation}</td>
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

// end of code
