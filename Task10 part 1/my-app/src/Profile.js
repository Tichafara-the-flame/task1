
 
import React, { Component } from 'react'
 
import UserProfile from 'react-user-profile'
 
class Profile extends Component {
  render() {
    const photo = ''
    const userName = 'Martin Makoni'
    const location = 'Cape Town'
 
    const comments = [
      {
        id: '1',
        photo: '',
        userName: 'Martin Makoni',
        content: 'This is my Profile at HyperionDev. ',
      
      }
    ]
 
    return (
      <div style={{ margin: '0 auto', width: '100%' }}>
        <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={50} initialFollowingCount={723} initialFollowersCount={680} initialComments={comments} />
      </div>
    )
  }
}
 
export default Profile;