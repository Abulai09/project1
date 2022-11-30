import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"


export let withRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render (){
            if(!this.props.isAuth){
                return <Navigate replace to='/Login'/>
            }
            return <Component {...this.props}/>
        }
    }   

    let mapStateToProps =(state)=>{
        return {isAuth:state.auth.isAuth}
    }
    

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}