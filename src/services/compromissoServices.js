import axios from 'axios';
import * as auth from '../auth/authServices';

const apiUrl = "http://reactagenda-001-site1.ctempurl.com/api/compromisso";

//função para realizar uma chamada POST na API
export const post = (compromisso) => {
    return axios.post(apiUrl, compromisso)
        .then( //promisse
            response => {
                return response.data;
            }
        )
};

//função para realizar uma chamada PUT na API
export const put = (compromisso) => {
    return axios.put(apiUrl, compromisso)
        .then( //promisse
            response => {
                return response.data;
            }
        )
};

//função para realizar uma chamada DELETE na API
export const remove = (id) => {
    return axios.delete(apiUrl + "/" + id)
        .then( //promisse
            response => {
                return response.data;
            }
        )
};

//função para realizar uma chamada GET na API
export const getByDatas = (dataMin, dataMax) => {
    return axios.get(apiUrl + "/" + dataMin + "/" + dataMax)
        .then( //promisse
            response => {
                return response.data;
            }
        )
}

//função para realizar uma chamada GET por ID na API
export const getById = (id) => {
    return axios.get(apiUrl + "/" + id)
        .then( //promisse
            response => {
                return response.data;
            }
        )
};

//função para interceptar requisições do AXIOS
axios.interceptors.request.use(

    config => {

        //verificar se a requisição que API está realizando é para 
        //um serviço de compromisso (URL)
        if(config.url.includes('compromisso')){

            if(auth.isAuthenticated()){
                //incluir um HEADER na requisição..
                config.headers['Authorization'] = 'Bearer ' + auth.getUserToken();
            }
            else{
                auth.redirectToLoginPage();
            }
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }

);