export const ADD_USER = 'ADD_USER'
export const ADD_PASSWORD = 'ADD_PASSWORD'

export const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})

export const add_password = (password) => ({
    type: ADD_PASSWORD,
    payload: password
})