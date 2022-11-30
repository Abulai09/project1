import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../utils/validator'
import TextArea from '../FormControl/formControl'

let maxLength10 = maxLength(10)


let ProfileForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
       <Field validate={[required,maxLength10]} component={TextArea} name={"newPostText"}/>
        <button>send</button>
    </form>
  )
}

let ProfileReduxForm = reduxForm({form:"ProfileFormAdd"})(ProfileForm)


const Profile = (props) => {

  let Posting = (values) => {
    props.postingAC(values.newPostText)
    values.newPostText=""
  }

  let posts = [...props.posts].reverse().map( m => <div>{m.post}</div> )

    return (
      <div>
        <ProfileReduxForm onSubmit={Posting}/>
        {posts}
      </div>
    );
  }



export default Profile;