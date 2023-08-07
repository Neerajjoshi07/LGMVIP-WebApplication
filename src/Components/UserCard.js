import React from 'react';
import './UserCardStyles.css'; // You can define your custom styles here

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h3>{user.login}</h3>
      <p>{user.html_url}</p>
    </div>
  );
};

export default UserCard;