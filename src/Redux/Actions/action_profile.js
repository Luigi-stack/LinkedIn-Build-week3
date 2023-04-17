import { async } from "q";

export const ADD_USER = 'ADD_USER'
export const ADD_PASSWORD = 'ADD_PASSWORD'
export const LOGIN= 'LOGIN';

export const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})

export const add_password = (password) => ({
    type: ADD_PASSWORD,
    payload: password
})


export const login=(user)=>({

type:LOGIN,
payload:user

})

export const getUser=(autentication)=>{

    return async (dispatch,getState)=>{

        try {

            const res=await fetch("https://striveschool-api.herokuapp.com/api/profile/me",{
                method: 'GET',
                headers:{
                    'Authorization':autentication
                }
            })
                if(res.ok){

                const data=await res.json()
                dispatch(login(data))
                console.log(getState())
                }else{

                    console.log("errore durante una richiesta")

                }
            
        } catch (error) {
            console.log(error)
        }

    }

}