import { ADD_PASSWORD, ADD_USER, ALL_PROFILE, EXPERIENCE, ID_POST, KEY, LOGIN, NEW, NEWS, SINLE_PROFILE } from "../Actions/action_profile"

const initialState = {
    user: {
        user: '',
        password: '',
        login:[],
        experience:[],
        allprofile:[],
        singleprofile:{},
        news:[],
        new:{},
        idpost:"",
        key:""
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

                    case EXPERIENCE:
                        return{
                            ...state,
                            user:{
                                ...state.user,
                                experience:action.payload

                            }
                        }
                    case ALL_PROFILE:
                        return{
                            ...state,
                            user:{
                                ...state.user,
                                allprofile:action.payload

                            }
                        }
                    case SINLE_PROFILE:
                        return{
                            ...state,
                            user:{
                                ...state.user,
                                singleprofile:action.payload

                            }
                        }

                        case NEWS:

                        return{
                            ...state,
                            user:{
                                ...state.user,
                                news:action.payload

                            }
                        }

                        case NEW:

                        return{
                            ...state,
                            user:{
                                ...state.user,
                                new:action.payload

                            }
                        }
                        case ID_POST:

                        return{
                            ...state,
                            user:{
                                ...state.user,
                                idpost:action.payload

                            }
                        }
                        case KEY:

                        return{
                            ...state,
                            user:{
                                ...state.user,
                                key:action.payload

                            }
                        }


        default: return state
    }
}

export default mainProfile