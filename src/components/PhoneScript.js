import React from 'react'
import { useNavigate } from 'react-router-dom';

const PhoneScript = ({phoneScript, deletePhoneScript}) => {
    const navigate = useNavigate();
    const editPhoneScript = (e, id) => {
        e.preventDefault();
        navigate(`/editPhoneScript/${id}`);
    }

  return (
    <tr key={phoneScript.id}>
            <td className="text-left p-3 whitespace-nowrap">{phoneScript.scriptA}</td>
            <td className="text-left p-3 whitespace-pre-wrap text-xs">{phoneScript.script_a_text}</td>
            <td className="text-left p-3 whitespace-nowrap">{phoneScript.hitsA}</td>
            <td className="text-left p-3 whitespace-nowrap">{phoneScript.missesA}</td>
            <td className="text-left p-3 whitespace-nowrap">{phoneScript.scriptB}</td>
            <td className="text-left p-3 whitespace-pre-wrap text-xs">{phoneScript.script_b_text}</td>
            <td className="text-left p-3 whitespace-nowrap">{phoneScript.hitsB}</td>
            <td className="text-left p-3 whitespace-nowrap">{phoneScript.missesB}</td>
            <td className="text-right p-3 whitespace-nowrap font-medium text-sm">
              <a 
              onClick={(e,id) => editPhoneScript(e, phoneScript.id)}
              className="text-indigo-600 hover:text-indigo-800 px-2 hover:cursor-pointer">
              Edit
              </a>
              <a 
              onClick={(e, id) => deletePhoneScript(e, phoneScript.id)}
              className="text-indigo-600 hover:text-indigo-800 px-2 hover:cursor-pointer">
              Delete
              </a>
            </td>
          </tr>
  )
}

export default PhoneScript