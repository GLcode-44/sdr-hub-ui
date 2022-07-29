import axios from "axios";

const PHONE_API_SCRIPT_BASE_URL = "http://localhost:8081/api/v1/phone_script_entity";

class PhoneScriptService {

    savePhoneScript(phoneScript) {
        return axios.post(PHONE_API_SCRIPT_BASE_URL, phoneScript);
    }

    getPhoneScripts() {
        return axios.get(PHONE_API_SCRIPT_BASE_URL);
    }

    deletePhoneScript(id) {
        return axios.delete(PHONE_API_SCRIPT_BASE_URL + "/" + id);
    }

    getPhoneScriptById(id) {
        return axios.get(PHONE_API_SCRIPT_BASE_URL + "/" + id)
    }

    updatePhoneScript(phoneScript, id) {
        return axios.put(PHONE_API_SCRIPT_BASE_URL + "/" + id, phoneScript);
    }

}

export default new PhoneScriptService();