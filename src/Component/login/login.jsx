import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { loginThunk } from '../../redux/auth-reducer'
import { required } from '../../utils/validator'
import TextArea from '../FormControl/formControl'
import { Navigate } from "react-router-dom"



const LoginForm = (props) =>{
    return( 
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required]} component={TextArea} name="login" placeholder="Login" /></div>
            <div><Field validate={[required]}  component={TextArea} name="password" type="Password" /></div>
            <div><Field component={"input"} name="checkbox" type="checkbox" />remember</div>
            {
                props.error && <div><span>{ props.error }</span></div> 
            }
            <div><button>Login</button> </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form:"login"})(LoginForm)

const Login =(props)=>{

    if(props.isAuth){
        return <Navigate replace to='/'/>
    }

    let onBtnSubmit = (formData) =>{
        props.loginThunk(formData.login,formData.password,formData.checkbox)
        console.log(formData)
    }

    return(
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onBtnSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) =>{
    return{
        isAuth:state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{loginThunk})
)(Login)

