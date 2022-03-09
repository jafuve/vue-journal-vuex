import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDTank8BuqkkMt_dBpN9xehV12C39Oy7GA'
    }
})

export default authApi;