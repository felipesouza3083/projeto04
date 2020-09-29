import axios from 'axios';

const apiUrl = "http://reactagenda-001-site1.ctempurl.com/api/Usuario";

export const post = (usuario) => {
    return axios.post(apiUrl, usuario)
        .then(
            response => {
                return response.data;
            }
        )
}

