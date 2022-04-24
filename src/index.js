import React from 'react';

// const element = React.createElement('div', )
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { Profile } from 'components/profile/Profile';
import './index.css';
// =================================

{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);

// const Paiting = (
// <div class="profile">
//   <div class="description">
//     <img
//       src={user.avatar}
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">{user.username}</p>
//     <p class="tag">{user.tag}</p>
//     <p class="location">{user.location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{user.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
// </div>
// );

