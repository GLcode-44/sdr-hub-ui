import axios from "axios";

const PHONE_API_SCRIPT_BASE_URL = "http://localhost:8081/api/v1/phone_script_entity";

class PhoneScriptService {

    savePhoneScript(phoneScript) {
        return axios.post(PHONE_API_SCRIPT_BASE_URL, phoneScript);
    }

}

export default new PhoneScriptService();