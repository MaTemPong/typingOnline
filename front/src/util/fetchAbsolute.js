import axios from 'axios';
import queryString from 'query-string';

const END_POINT = process.env.REACT_APP_API_URI;

const fetchAbsolute = async (method = 'get', pathname, options = {}) => {
    const pathnameArr = pathname.split('?');
    const originPathname = pathnameArr.splice(0, 1)[0];
    const queryObj = queryString.parse(pathnameArr.join(''));
    queryObj.locale = options.locale || localStorage.getItem('locale') || 'ko';
    const config = {
        method,
        url: END_POINT + originPathname + '?' + queryString.stringify(queryObj)
    };
    let result;
    let errorResponse = {};
    try {
        result = await axios({ ...config, ...options })
            .then(data => data.response || data)
            .catch(err => {
                console.log('[config]', config)
                console.log('[options]', options)
                console.log('[err.response]', err.response)
                errorResponse = err.response.data;
                if (err.response.status === 403) {
                    return document.location.href = `/`;
                };
            });
        if (result.status >= 500) {
            throw new Error('/error/server');
        } else if (result.status >= 400) {
            throw new Error('/error/client');
        };
        return result;
    } catch (err) {
        return {
            ...result,
            ...errorResponse,
            error: true,
            redirectURL: errorResponse.message,
        };
    };
};

export default fetchAbsolute;