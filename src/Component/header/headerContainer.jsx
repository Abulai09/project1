import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { logoutThunk } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{

    
    render(){
        return(
            <div> <Header logout={this.props.logoutThunk} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}/> </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login,
        email:state.auth.email
    }
}

export default connect(mapStateToProps,{logoutThunk})(HeaderContainer)