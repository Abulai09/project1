import React from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { getCurrentUserPageThunk } from "../../redux/profile-reducer";
import withRouterr from "../HOCs/withRouter";

class UserProfileContainerAPI extends React.Component{
    componentDidMount(){
        let userId = this.props.params.userId
        if(!userId){
            userId=this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/Login')
            }
        }
        this.props.getCurrentUserPageThunk(userId)
    }

    render(){
        return <div>
            <UserProfile userProfile={this.props.userProfile}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return{
        userProfile:state.profilePage.userProfile,
        authorizedUserId:state.auth.id
    }
}

let UserProfileContainer = withRouterr(UserProfileContainerAPI)


export default connect(mapStateToProps,{getCurrentUserPageThunk})(UserProfileContainer)