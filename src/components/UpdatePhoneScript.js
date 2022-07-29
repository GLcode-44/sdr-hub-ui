import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PhoneScriptService from '../services/PhoneScriptService';

const UpdatePhoneScript = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [phoneScript, setPhoneScript] = useState({
        id: id,
        scriptA: "",
        script_a_text: "",
        scriptB: "",
        script_b_text: "" 
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setPhoneScript({ ...phoneScript, [e.target.name]: value});
    }

    const updatePhoneScript = (e) => {
        e.preventDefault();
        PhoneScriptService.updatePhoneScript(phoneScript, id)
        .then((response) => {
            navigate("/phoneScriptList");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PhoneScriptService.getPhoneScriptById(id);
            
                setPhoneScript(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    

  return (
    <div className="flex max-w-md md:max-w-2xl shadow mx-auto border-b">
        <div className="px-8 py-8">
            <div className="">
                <h1 className="font-thin text-2xl tracking-wider">Update Phone Script</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Phone Script A Name</label>
                <input type="text"
                name="scriptA" 
                value={phoneScript.scriptA}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-100 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Phone Script A Text</label>
                <textarea 
                name="script_a_text"
                value={phoneScript.script_a_text}
                onChange={(e) => handleChange(e)}
                className="w-96  border my-2 px-2 py-2 whitespace-normal resize-y block"></textarea>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Phone Script B Name</label>
                <input type="text" 
                name="scriptB"
                value={phoneScript.scriptB}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-100 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Phone Script B Text</label>
                <textarea 
                name="script_b_text"
                value={phoneScript.script_b_text}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border my-2 px-2 py-2 whitespace-normal resize-y"></textarea>
            </div>
            <div className="items-center justify-center h-100 w-full my-4 space-x-4 pt-4">
                <button onClick={updatePhoneScript} className="rounded text-white font-semibold tracking-wider bg-green-600 py-2 px-6 hover:bg-green-800">
                Update
                </button>
                <button 
                onClick={() => navigate("/phoneScriptList")}
                className="rounded text-white font-semibold tracking-wider bg-red-600 py-2 px-6 hover:bg-red-800">Cancel</button>
            </div>
            
        </div>
    </div>
  )
}

export default UpdatePhoneScript