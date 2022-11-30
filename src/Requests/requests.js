import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"67142df9-8edc-4c1c-9cc0-7db7035e1582"
    }
})


export let requestDAL = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getCurrentUserPage(userId){
    return instance.get(`profile/${userId}`)
  },
  followUser(userId){
    return instance.post(`follow/${userId}`)
  },
  unFollowUser(userId){
    return instance.delete(`follow/${userId}`)
  },
  getAuth(){
    return instance.get(`auth/me`)
  },
  login(email,password,rememberMe=false){
    return instance.post('auth/login',{email,password,rememberMe})
  },
  logout(){
    return instance.delete('auth/login')
  }
};
