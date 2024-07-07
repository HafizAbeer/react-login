import { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Login from './Components/pages/Auth/Login';
import Register from './Components/pages/Auth/Register';
import Welcome from './Components/pages/Auth/Welcome';
import ForgotPassword from './Components/pages/Auth/forgotPassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentView, setCurrentView] = useState('register');

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} setCurrentView={setCurrentView} />;
      case 'welcome':
        return <Welcome userEmail={userEmail} />;
      case 'forgotPassword':
        return <ForgotPassword setCurrentView={setCurrentView} />;
      case 'register':
      default:
        return <Register setCurrentView={setCurrentView} />;
    }
  };

  return <div className="App">{isLoggedIn ? <Welcome userEmail={userEmail} /> : renderView()}</div>;
}

export default App;
