import React from 'react'
import PostSide from '../../PostSide/PostSide'
import ProfileCard from '../../ProfileCard/ProfileCard'
import ProfileLeft from '../../ProfileLeft/ProfileLeft'
import RightSide from '../../RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile