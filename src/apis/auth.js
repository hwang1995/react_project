import axios from 'axios';

export function login(user) {
    return axios.post('/auth/login', user);
}

export async function join(user) {
    return axios.post('/auth/join', user);
}