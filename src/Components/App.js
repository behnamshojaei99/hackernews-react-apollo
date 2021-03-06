import logo from '../logo.svg';
import '../styles/App.css';
import CreateLinks from './CreateLinks';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LinkList from './LinkList';
import Header from './Header';
import Login from './Login';

function App() {
  
  return (
    <div className='center w85'>
      <Header />
        <div className="ph3 pv1 background-gray"> 
          <Switch>
            <Route exact path='/' component={LinkList} />
            <Route exact path='/create' component={CreateLinks} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
