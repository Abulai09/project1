import React from "react";
import { connect } from "react-redux";
import { Route,Routes } from "react-router-dom";
import { compose } from "redux";
import HeaderContainer from "./Component/header/headerContainer";
import Login from "./Component/login/login";
import ProfileInfo from "./Component/profile/ProfileInfo";
import UsersContainer from "./Component/users/usersContainer";
import { setInitializedThunk } from "./redux/app-reducer";
import { getAuthThunk } from "./redux/auth-reducer";

class App extends React.Component  {
  componentDidMount(){
    this.props.setInitializedThunk()
}

  render () {
    if(!this.props.initialized){
      return <div><h1>Loading...</h1></div>
    }else{
      return (
        <div>
          <HeaderContainer/>
          <Routes>
            <Route path={"/"} element={<ProfileInfo/>}/>
            <Route path={"/:userId"} element={<ProfileInfo/>}/>
            <Route path={"/Users"} element={<UsersContainer/>}/>
            <Route path={"/Login"} element={<Login/>}/>
          </Routes>
        </div>
      );
    }
  }
}

let mapStateToProps = (state) =>{
  return{
    initialized:state.app.initialized

  }
}

export default compose( 
  connect(mapStateToProps,{setInitializedThunk}),
 )(App);
