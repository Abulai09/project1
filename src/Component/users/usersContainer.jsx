import React from "react";
import Users from "./users";
import { connect } from "react-redux";
import {  FollowThunk, GetUsersThunk, setcurrentPageAC, UnFollowThunk } from "../../redux/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.GetUsersThunk(this.props.currentPage,this.props.pageSize)
  }

  onPageChanged = (num) => {
    this.props.setcurrentPageAC(num);
    this.props.GetUsersThunk(num,this.props.pageSize)
  };

  render() {
    return (
      <div>
        {this.props.isFetChing ? <h1>Loading...</h1> : null}
        <Users
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          UnFollowThunk={this.props.UnFollowThunk}
          FollowThunk={this.props.FollowThunk}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize:state.usersPage.pageSize,
        isFetChing:state.usersPage.isFetChing,
        followingInProgress:state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
  FollowThunk,
  UnFollowThunk,
  GetUsersThunk,  
  setcurrentPageAC,
})(UsersContainer);