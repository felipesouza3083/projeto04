const USER_TOKEN = 'userToken';
const USER_TOKEN_EXPIRATION = 'userTokenExpiration';
const USER_EMAIL = 'userEmail';

export const signInCredentials = (userEmail, tokenInformation) => {

    window.localStorage.setItem(USER_TOKEN_EXPIRATION,
        tokenInformation.userTokenExpiration);

    window.localStorage.setItem(USER_TOKEN,
        tokenInformation.userToken);

    window.localStorage.setItem(USER_EMAIL,
        userEmail);
};

export const signOutCredentials = () => {
    window.localStorage.removeItem(USER_TOKEN);
    window.localStorage.removeItem(USER_TOKEN_EXPIRATION);
    window.localStorage.removeItem(USER_EMAIL);
};

export const redirectToAdminPage = () => {
    window.location.href = '/admin';
};

export const redirectToLoginPage = () => {
    window.location.href = '/';
};

export const getUserToken = () => {
    return localStorage.getItem(USER_TOKEN);
};

export const getUserTokenExpiration = () => {
    return localStorage.getItem(USER_TOKEN_EXPIRATION);
};

export const getUserEmail = () => {
    return localStorage.getItem(USER_EMAIL);
};

export const isAuthenticated = () => {
    var userToken = getUserToken();
    var userTokenExpiration = getUserTokenExpiration();

    var dataAtual = new Date();
    var dataDeExpiracaoDoToken = new Date(userTokenExpiration);

    return (userToken && dataDeExpiracaoDoToken > dataAtual)
}