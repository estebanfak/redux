// Async action types
export const API_CALLS_REQUEST = 'API_CALLS_REQUEST' // Watcher Saga Listens
export const API_CALLS_SUCCESS = 'API_CALLS_SUCCESS' // Dispatched by Worker saga
export const API_CALLS_FAILURE = 'API_CALLS_FAILURE' // Dispatched by Worker saga


export const login = (email, password) => {
    return {
        type: API_CALLS_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            okAction: API_CALLS_SUCCESS,
            failAction: API_CALLS_FAILURE

        }
    }
}
/**
 * Generic http request action dispatcher
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALLS_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            okAction: API_CALLS_SUCCESS,
            failAction: API_CALLS_FAILURE

        }
    }
}