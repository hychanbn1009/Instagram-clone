import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5000/"
});

// Add a request interceptor
instance.interceptors.request.use(
    // first function is going to be called automatically anytime we are about to make request
    async (config)=>{
        const token= await localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    //second function is an error when making that reqest 
    (error)=>{
        return Promise.reject(error)
    }
)

export default instance;