import axios from "axios";

export default axios.create({
    // baseURL: 'https://43b6-2402-800-629f-6c62-d055-4484-85b0-4d42.ngrok-free.app/',
     baseURL: 'http://localhost:8080',
    headers: { "ngrok-skip-browser-warning": "true" },

});
