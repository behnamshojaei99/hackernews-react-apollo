import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    history.push('/');
  }

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black"> 
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        <Link to="/top" className="ml1 no-underline black">
          top
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          search
        </Link>
        
        {authToken && (
          <div className="flex">
            <div className='ml1'>|</div>
            <Link
            to="/create"
            className="ml1 no-underline black"
            >
            submit
            </Link> 
          </div>)
        }
        </div>
        <div className='flex flex-fixed'>
          {authToken ? <div onClick={logout} className='ml1 pointer black'>
            logout
          </div>
          : 
          <Link to='/login' className='ml1 no-underline black'>Login</Link>}
        </div>
      
    </div>
  );
};

export default Header;