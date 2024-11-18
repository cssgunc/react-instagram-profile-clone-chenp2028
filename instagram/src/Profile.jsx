import React, { useState } from 'react';
import './Profile.css'; // Add styles here or inline if preferred
import { profilePic, post1, post2, post3, threeDots } from './assets';

function Profile() {
  // Initial states
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(323); // Starting with 323 followers as per the image

  // Function to toggle follow/unfollow
  const handleFollow = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
      setIsFollowing(false);
    } else {
      setFollowers(followers + 1);
      setIsFollowing(true);
    }
  };

  return (
    <body className = "body">
    <div className="profile-container">

        <div className="profile-image">
            <img src={profilePic} alt="Profile Picture"/>
        </div>

        <div className="profile-info">

        <div className = "hc">
            <h1 className="username">phoebechen_</h1>
            <img src = {threeDots} alt = "three dots" width = "25px" height = "auto"/>
        </div>

        <p className="bio"><b>Phoebe Chen</b> <br/>unc 28</p>

          <button
            onClick={handleFollow}
            style={{
              backgroundColor: isFollowing ? '#efefef' : '#3897f0',
              color: isFollowing ? '#262626' : '#ffffff'
            }}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>

          <div className="stats">
                <span>3 posts</span>
                <span>{followers} followers</span>
                <span>301 following</span>
          </div>

        </div>

      <div className="image-grid">
            <img src={post1} alt="Post 1"/>
            <img src={post2} alt="Post 2"/>
            <img src={post3} alt="Post 3"/>
      </div>

    </div>

    <footer>
        <p>Created by Phoebe Chen</p>
    </footer>

  </body>
  
  );
}

export default Profile;
