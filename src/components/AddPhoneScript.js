import React, { useState } from 'react'
import PhoneScriptService from '../services/PhoneScriptService';

const AddPhoneScript = () => {

    const [phoneScript, setPhoneScript] = useState({
        id: "",
        scriptA: "",
        script_a_text: "",
        scriptB: "",
        script_b_text: "" 
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setPhoneScript({ ...phoneScript, [e.target.name]: value});
    }

    const savePhoneScript = (e) => {
        e.preventDefault();
        //call api
        PhoneScriptService.savePhoneScript(phoneScript).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="flex max-w-md md:max-w-2xl shadow mx-auto border-b">
        <div className="px-8 py-8">
            <div className="">
                <h1 className="font-thin text-2xl tracking-wider">Add New Phone Script</h1>
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
                <button onClick={savePhoneScript} className="rounded text-white font-semibold tracking-wider bg-green-600 py-2 px-6 hover:bg-green-800">
                Save
                </button>
                <button className="rounded text-white font-semibold tracking-wider bg-red-600 py-2 px-6 hover:bg-red-800">Clear</button>
            </div>
            
        </div>
    </div>
  )
}

export default AddPhoneScript