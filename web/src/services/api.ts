import axios from 'axios';

//chamando a rota de onde está a api, neste caso usamos o localhost porque não temos nada hospedado
//em algum local externo do computador.
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;