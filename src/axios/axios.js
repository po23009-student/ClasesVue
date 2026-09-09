import axios from "axios";

const apiRandomUser = axios.create({
    baseURL: 'https://randomuser.me', // No se pone '/' al final
});

export { apiRandomUser };