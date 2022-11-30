import { stopSubmit } from "redux-form"
import { requestDAL } from "../Requests/requests"

let initialState = {
    isAuth:false,
    id:null,
    email:null,
    login:null
}

export let getAuthAC = (id,login,email,isAuth) => ({type:"getAuth",data:{id,email,login,isAuth}})

let authReducer = (state=initialState,action)  => {
    switch(action.type){
        case "getAuth":
            return{
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export let getAuthThunk = () => {
    return (dispatch) =>{
        requestDAL.getAuth()
            .then( response => {
                if(response.data.resultCode===0){
                    let {id,email,login} = response.data.data
                    dispatch(getAuthAC(id,email,login,true))
                }
            } )
    }
}

export let loginThunk = (email,password,rememberMe) => {
    return (dispatch) =>{
        requestDAL.login(email,password,rememberMe).then( (response) =>{
            if(response.data.resultCode === 0){
                dispatch(getAuthThunk())
            }
            else{
                let message = response.data.messages.length>0 ? "Invalid passoword or email" : null
                dispatch(stopSubmit("login",{_error:message}))
            }
        } )
    }
}

export let logoutThunk = () => {
    return (dispatch) =>{
        requestDAL.logout().then( (response) =>{
            if(response.data.resultCode === 0){
                dispatch(getAuthAC(null,null,null,false))
            }
        } )
    }
}

export default authReducer