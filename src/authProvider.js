import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_GET_PERMISSIONS, AUTH_CHECK } from 'react-admin';
import decodeJwt from 'jwt-decode';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('https://gcer-api.herokuapp.com/auth/sign_in', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                const decodedToken = decodeJwt(token);
                localStorage.setItem('token', token);
                localStorage.setItem('role', decodedToken.role);
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        // ...
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject('Unknown method');
};