import { requestDAL } from "../Requests/requests"

export let setTotalUsersCountAC = (totalUsersCount) => ({type:"setTotalUsersCount",totalUsersCount})
export let setcurrentPageAC = (currentPage) => ({type:"setcurrentPage",currentPage})
let getUsersAC = (users) => ({type:"getUsers",users})
let FollowAC = (Userid) => ({type:"Follow",Userid})
let UnFollowAC = (Userid) => ({type:"UnFollow",Userid})
let setIsFetChingAC = (isFetChing) => ({type:"setIsFetChing",isFetChing})
let toggleFollowingInProgress = (boool,userId) => ({type:"followingInProgress",boool,userId})


let initialState = {
    users:[],
    currentPage:1,
    totalUsersCount:20,
    pageSize:5,
    isFetChing:false,
    followingInProgress:[]
}

let usersReducer = (state=initialState,action) => {
    switch(action.type){
        case "setIsFetChing":
            return{
                ...state,
                isFetChing:action.isFetChing
            }
        case "followingInProgress":
            return{
                ...state,
                followingInProgress:action.boool 
                ?[...state.followingInProgress,action.userId] 
                :state.followingInProgress.filter(id=>id != action.userId)
            }
        case "setcurrentPage":
            return{
                ...state,
                currentPage:action.currentPage
            }
        case "setTotalUsersCount":
            return{
                ...state,
                totalUsersCount:action.totalUsersCount
            }
        case "getUsers":
            return{
                ...state,
                users:action.users
            }
        case "Follow":
            return{
                ...state,
                users:state.users.map( u =>{
                    if(u.id===action.Userid){
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        case "UnFollow":
            return{
                ...state,
                users:state.users.map( u =>{
                    if(u.id===action.Userid){
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        default:
            return state
    }
}


export let GetUsersThunk = (currentPage,pageSize) =>{
    return (dispatch) =>{
        dispatch(setIsFetChingAC(true))
        requestDAL.getUsers(currentPage,pageSize).then((data) => {
            dispatch(setIsFetChingAC(false))
            dispatch(getUsersAC(data.items))
        })
    }
}

export let FollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    requestDAL.followUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(FollowAC(userId))
      }
      dispatch(toggleFollowingInProgress(false, userId))
    })
  }
}

export let UnFollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    requestDAL.unFollowUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(UnFollowAC(userId))
      }
      dispatch(toggleFollowingInProgress(false,userId))
    })
  }
}

export default usersReducer