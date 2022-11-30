import React from "react"

const UserProfile = React.memo(props => {
    console.log("h")
    return(
        <div>
            <h3>name:{props.userProfile.fullName}</h3>
            <h4>lookingForAJobDescription:{props.userProfile.lookingForAJobDescription || "Not"}</h4>
            <img src={"https://starpri.ru/wp-content/uploads/2018/12/image.jpg"} alt="photo" />
        </div>
    )
})

export default UserProfile