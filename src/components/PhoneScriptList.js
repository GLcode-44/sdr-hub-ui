import React from 'react'
import { useNavigate } from 'react-router-dom';

const PhoneScriptList = () => {

  const navigate = useNavigate();

  return ( 
  <>
  <div className="container mx-auto my-8">
    <div className="h-12">
      <button className="rounded bg-orange-600 mx-2 px-6 py-2 font-semibold"
      onClick={() => navigate("/addPhoneScript")}>
      Add Phone Script
      </button>
    </div>
    <div className="flex shadow border-b rounded-lg overflow-auto mx-2">
      <table className="w-full">
        <thead class="bg-gray-100 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Script A Name</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Script A</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Hits</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Misses</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Script B Name</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Script B</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Hits</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Misses</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="text-left p-3 whitespace-nowrap">Initial outreach A</td>
            <td className="text-left p-3 whitespace-pre-wrap text-xs">This is a sample script for an initial outreach phone campaign.</td>
            <td className="text-left p-3 whitespace-nowrap">10</td>
            <td className="text-left p-3 whitespace-nowrap">0</td>
            <td className="text-left p-3 whitespace-nowrap">Initial outreach B</td>
            <td className="text-left p-3 whitespace-pre-wrap text-xs">This is a sample script for an initial outreach phone campaign. It will be the 2nd script for testing purposes.</td>
            <td className="text-left p-3 whitespace-nowrap">4</td>
            <td className="text-left p-3 whitespace-nowrap">7</td>
            <td className="text-right p-3 whitespace-nowrap font-medium text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-800 px-2">Edit</a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 px-2">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </>
  );
};

export default PhoneScriptList