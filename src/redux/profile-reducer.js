import { requestDAL } from "../Requests/requests"

let initialState = {
    profile:[
        {post:"Hello World"},
        {post:"Hi"},
    ],
    userProfile:[],
}

export let postingAC = (mes) => ({type:"postMes",mes})
export let setUserProfileAC = (userProfile) => ({type:"setUserProfile",userProfile})

let profileReducer = (state=initialState,action) => {
    switch(action.type){
        case "setUserProfile":
            return{
                ...state,
                userProfile:action.userProfile
            }
        case "postMes":
            let newPost = {
                post:action.mes
            }
            return{
                ...state,
                profile:[...state.profile,newPost],
                placeHolder:""
            }
        default:
            return state
    }
}


export let getCurrentUserPageThunk = (userID) => {
    return (dispatch) => {
        requestDAL.getCurrentUserPage(userID)
            .then( response =>{
                dispatch(setUserProfileAC(response.data))
            })
    }
}

export default profileReducer
