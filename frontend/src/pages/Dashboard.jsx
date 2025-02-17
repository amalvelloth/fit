import React, { useEffect, useState } from 'react';
import DesktopMenu from '../components/DesktopMenu';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils'

function Dashboard() {

  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

  const capitalizedFirstLetter = (name) => {
    if(!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const capitalizedUserName = capitalizedFirstLetter(loggedInUser)
  
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good morning';
    if (hours < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const greeting = getGreeting();


  return (
    <>
      <section className="flex">
        <DesktopMenu />
        <div className="h-screen w-full relative flex  bg-neutral-900">
          <div className="flex items-start pt-24 justify-start px-8 max-sm:px-4">
            <div className="greetings">
              <h1 className="text-white text-2xl max-sm:text-lg">
                {greeting}{''} <span className="font-extrabold text-4xl max-sm:text-2xl">{capitalizedUserName}</span>
              </h1>
              <h2 className="text-white text-4xl max-sm:text-3xl font-semibold mt-2">Welcome back! 🎉</h2>
              <button onClick={handleLogout} className='mt-5 px-3 py-2 rounded-lg bg-gray-800 text-red-500'>log out</button>
            </div>
            <div className="avatar bg-gray-600 w-24 h-24 rounded-full border-none overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://i.pinimg.com/736x/56/28/a6/5628a66967df6318515fcbe7e912e274--cr-ronaldo-cristiano-ronaldo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
