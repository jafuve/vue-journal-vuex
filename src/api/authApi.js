import axios from "axios";

const authApi = axios.create({
    baseURL: 'backend-endpoint-url',
    params: {
        key: 'private-key'
    }
})

export default authApi;
