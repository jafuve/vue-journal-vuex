import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-e0a09-default-rtdb.firebaseio.com'
})

export default journalApi;