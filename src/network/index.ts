import axios, { AxiosRequestConfig, Method } from 'axios'

axios.defaults.timeout = 60000 * 4;

let baseURL =  'http://47.105.178.171:3000'

axios.interceptors.response.use(response  => {
    const res = response.data
    if(res.code !== 200) {
        return Promise.reject(res)
    }else {
        return res
    }
}, err => {
    return Promise.reject(err)
})

const _configHeaders = function() {
    let headers = {
        'Content-Type' : 'application/json'
    }
    return headers;
}

const request = function(method: Method,url: string,params?: any) {
    let _url = baseURL + url;
    const config:  AxiosRequestConfig = {
        url: _url,
        method: method,
        headers: _configHeaders()
    }
    if(params && method === 'GET') {
        config.params = params
    }else if(params && method === 'POST') {
        config.data = params
    }
    return new Promise((resolve,reject) => {
        axios(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

const doPost = function(url: string, params?: any) {
    return request('POST', url, params )
}

const doGet = function(url: string, params?: any) {
    return request('GET',url,params)
} 

export default {
    request,
    doPost,
    doGet
};
