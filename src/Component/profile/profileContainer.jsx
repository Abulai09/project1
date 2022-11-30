import React from "react";
import { connect } from "react-redux";
import { changeValAC, postingAC } from "../../redux/profile-reducer";
import Profile from "./profile";

const ProfileContainer = (props) => {
  return (
    <div>
      <Profile
        changeValAC={props.changeValAC}
        postingAC={props.postingAC}
        placeHolder={props.placeHolder}
        posts={props.profile}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
    return{
        placeHolder:state.profilePage.placeHolder,
        profile:state.profilePage.profile
    }
}

export default connect(mapStateToProps,{postingAC})(ProfileContainer)