import React from 'react';

function UserProfile(props) {

let githubUserName = props.location.state.username;

console.log(githubUserName)

  return (

    <div className='userProfile'>
    

    <p>{githubUserName}</p>


    </div>

  );
}

export default UserProfile;