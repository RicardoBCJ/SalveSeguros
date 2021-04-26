import axios from 'axios';

export const apiGetShops = axios.create({
    baseURL: 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Oficina'
})

export const sendFriendRequest = axios.create({
    baseURL: 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Indicacao'
})