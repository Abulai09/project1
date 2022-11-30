import { withRedirect } from "../HOCs/withRedirect"
import ProfileContainer from "./profileContainer"
import UserProfileContainer from "./UserProfileContainer"

const ProfileInfo = () => {
    return(
        <div>
            <UserProfileContainer/>
            <ProfileContainer/>
        </div>
    )
}



export default withRedirect(ProfileInfo)