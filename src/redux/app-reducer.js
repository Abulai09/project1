import { getAuthThunk } from "./auth-reducer"

let initialState = {
    initialized : false
}

let appReducer = (state=initialState,action) => {
    switch(action.type){
        case "setInitialized":
            return{
                ...state,
                initialized:true
            }

        default:
            return state
    }
}

let setInitializedAC = () =>({type:"setInitialized"})

export let setInitializedThunk = () =>{
    return (dispatch) =>{
        let promise = dispatch(getAuthThunk())
        Promise.all([promise]).then( ()=>{
            dispatch(setInitializedAC())
        } )
    }
}

export default appReducer