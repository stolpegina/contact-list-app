import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from './pages/sign-in/sign-in.component';
import ContactListPage from './pages/contact-list-page/contact-list-page.component';

import { Switch, Route } from 'react-router-dom';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const onSignIn = () => {
    localStorage.setItem("isAuth", JSON.stringify(true));
    setIsAuth(true);
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          {isAuth
            ? <ContactListPage />
            : <SignIn onSignIn={onSignIn} />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
