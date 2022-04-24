// import ReactDOM from 'react-dom';
import user from './user.json';
export const Profile = () => {
    return (
        <div class="profile">
            <div
                class="description"
                style={{
                    height: '100vh',
                    padding: '15px',
                    
                    display: 'block',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 16,
                    color: '#010101',
                }}
            >
                <img
                    src={user.avatar}
                    alt="User avatar"
                    class="avatar"
                    width="150"
                />
                <p class="name">{user.username}</p>
                <p class="tag">@{user.tag}</p>
                <p class="location">{user.location}</p>
            </div>

            <ul class="stats"
                style={{
                    border: '2px solid tomato',
                    display: 'block',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    color: '#010101',
                }}>
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{user.stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{user.stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

// export const Profile = () => {
//     return (
//         <div class="profile">
//             <div class="description">
//                 <img
//                     src={user.avatar}
//                     alt="User avatar"
//                     class="avatar"
//                 />
//                 <p class="name">{user.username}</p>
//                 <p class="tag">{user.tag}</p>
//                 <p class="location">{user.location}</p>
//             </div>

//             <ul class="stats">
//                 <li>
//                     <span class="label">Followers</span>
//                     <span class="quantity">{user.stats.followers}</span>
//                 </li>
//                 <li>
//                     <span class="label">Views</span>
//                     <span class="quantity">{user.stats.views}</span>
//                 </li>
//                 <li>
//                     <span class="label">Likes</span>
//                     <span class="quantity">{user.stats.likes}</span>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// ReactDOM.render(Profile, document.querySelector('#root'));
