import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PhoneScriptService from '../services/PhoneScriptService';
import PhoneScript from './PhoneScript';
const PhoneScriptList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [phoneScripts, setPhoneScripts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await PhoneScriptService.getPhoneScripts();
        setPhoneScripts(response.data);
      } catch(error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deletePhoneScript = (e, id) => {
    e.preventDefault();
    PhoneScriptService.deletePhoneScript(id)
    .then((res) => {
        if(phoneScripts) {
          setPhoneScripts((prevElement) => {
              return prevElement.filter((phoneScript) => phoneScript.id !== id);
          })
        }
    });
  };
  
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
        {!loading && (
        <tbody className="bg-white">
            {phoneScripts.map((phoneScript) => (
              <PhoneScript phoneScript={phoneScript} deletePhoneScript={deletePhoneScript}key={phoneScript.id}></PhoneScript>
          ))}
        </tbody>
        )}
      </table>
    </div>
  </div>
  </>
  );
};

export default PhoneScriptList