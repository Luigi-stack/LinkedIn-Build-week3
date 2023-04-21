
export const ADD_USER = 'ADD_USER';
export const ADD_PASSWORD = 'ADD_PASSWORD';
export const LOGIN = 'LOGIN';
export const EXPERIENCE = "EXPERIENCE";
export const ALL_PROFILE = "ALL_PROFILE";
export const SINLE_PROFILE = "SINGLE_PROFILE";
export const NEWS = "NEWS";
export const NEW = "NEW"
export const ID_POST = "ID_POST"
export const KEY="KEY"

export const change_key=(key)=>({

    type:KEY,
    payload:key

})

export const id_post = (id) => ({
    type: ID_POST,
    payload: id
})

export const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})

export const add_password = (password) => ({
    type: ADD_PASSWORD,
    payload: password
})


export const login = (user) => ({

    type: LOGIN,
    payload: user

})

export const allProfile = (profile) => ({

    type: ALL_PROFILE,
    payload: profile

})
export const singleProfile = (profile) => ({

    type: SINLE_PROFILE,
    payload: profile

})


export const experience = (experience) => ({

    type: EXPERIENCE,
    payload: experience

})


export const news = (news) => ({

    type: NEWS,
    payload: news

})

export const singleNew = (singleNew) => ({

    type: NEW,
    payload: singleNew

})




export const getNews = (autentication) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(news(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const getNew = (autentication, postId) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(singleNew(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const setNew = (autentication, postId, bodyCode) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
                method: 'PUT',
                body: bodyCode,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                console.log(data)
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const delNew = (autentication, postId) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                console.log(data)
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}



export const addNews = (autentication, bodyCode, img) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
                method: 'POST',
                body: bodyCode,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(addPicturePost(autentication, data._id, img))
                console.log(data)
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}




export const getExperienceALL = (autentication, idUser) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser + "/experiences/", {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(experience(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const getExperience = (autentication, idUser, idExp) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser + "/experiences/" + idExp, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(experience(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const delExperience = (autentication, idUser, idExp) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser + /experiences/ + idExp, {
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {
                dispatch(getExperienceALL(autentication, idUser))
                console.log(res.ok)
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const addExperience = (autentication, idUser, bodyCode) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser + /experiences/, {
                method: 'POST',
                body: bodyCode,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {
                dispatch(getExperienceALL(autentication, idUser))
                console.log(res.ok)
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const setExperience = (autentication, idUser, expId, bodyCode) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser + "/experiences/" + expId, {
                method: 'PUT',
                body: bodyCode,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {
                dispatch(getExperienceALL(autentication, idUser))
                console.log(res.ok)
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}



export const getUserMe = (autentication) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(login(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const getUserALL = (autentication) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(allProfile(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const getUserId = (autentication, userID) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userID, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(singleProfile(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const modUserMe = (autentication, bodyCode) => {

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
                method: 'PUT',
                body: bodyCode,
                headers: {

                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(login(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const addPictureProfile = (autentication, userId, fileImg) => {
    const image = new FormData();
    image.delete("profile")
    image.append("profile", fileImg)

    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/picture", {
                method: 'POST',
                body: image,
                headers: {

                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(getUserMe(autentication))
                console.log(data)
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const addPictureExperience = (autentication, userId, expId, fileImg) => {
    const image = new FormData();
    image.delete("experience")
    image.append("experience", fileImg)


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences/" + expId + "/picture", {
                method: 'POST',
                body: image,
                headers: {

                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(getExperienceALL(autentication, userId))
                console.log(data)
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const addPicturePost = (autentication, postId, fileImg) => {
    const image = new FormData();

    image.append("post", fileImg)


    return async (dispatch, getState) => {

        try {

            const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
                method: 'POST',
                body: image,
                headers: {

                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(getNews(autentication))
                console.log(data)
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const ChangeKey = (key) => {
    return  (dispatch, getState) => {

        dispatch(change_key(key))
        dispatch(getUserMe(key))


    }
    }




