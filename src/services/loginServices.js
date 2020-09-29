import axios from 'axios';

const apiUrl = "http://reactagenda-001-site1.ctempurl.com/api/login";

//função para realizar uma chamada POST na API
export const post = (login) => {
    return axios.post(apiUrl, login)
        .then( //promisse
            response => {
                return response.data;
            }
        )
}
