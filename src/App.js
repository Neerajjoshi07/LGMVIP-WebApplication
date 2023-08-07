import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import UserCard from './Components/UserCard';
import Loader from './Components/Loader';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };


  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      <div className="user-card-grid">
        {loading ? (
          <Loader />
        ) : (
          users.map(user => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default App;