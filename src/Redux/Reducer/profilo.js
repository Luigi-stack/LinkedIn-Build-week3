import { ADD_PASSWORD, ADD_USER, LOGIN } from "../Actions/action_profile"

const initialState = {
    user: {
        user: '',
        password: '',
        login:[]
    }
}

const mainProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: 
            return {
                ...state,
                user: {
                    ...state.user,
                    user: action.payload
                }
            }

            case ADD_PASSWORD:
                return {
                    ...state,
                user: {
                    ...state.user,
                    password: action.payload
                }
                }

                case LOGIN:
                    return{
                          ...state,
                          user:{
                            ...state.user,
                            login:action.payload
                          }  

                    }


        default: return state
    }
}

export default mainProfile