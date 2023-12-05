export const getIsAuthentication = () => {
    const cookieName = `accessTokenAdmin=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

export const getIsAdmin = () => {
    const cookieName = `accessTokenAdmin=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return Boolean(cookie.substring(cookieName.length, cookie.length));
        }
    }
    return null;
}

export const setIsAdmin = () => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
    document.cookie = `isAdmin=true;expires=${expires.toUTCString()};path=/;secure`;
}

export const setIsAuthentication = (token) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
    document.cookie = `accessTokenAdmin=${token};expires=${expires.toUTCString()};path=/;secure`;
}

export const removeIsAdmin = () => {
    document.cookie = `isAdmin=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

export const removeIsAuthentication = () => {
    document.cookie = `accessTokenAdmin=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}


export const checkAuth = () => {
    const isAuthentication = getIsAuthentication()
    const isAdmin = getIsAdmin()

    if (isAuthentication && isAdmin) {
        return true
    }

    return false
}