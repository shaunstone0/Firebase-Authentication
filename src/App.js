import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { fetchUser } from './actions/firebase-actions';
import { connect } from 'react-redux';

// Components
import Home from './compoments/Home/Home';
import Header from './compoments/Header/Header';
import Public from './compoments/Public/Public';
import Private from './compoments/Private/Private';
import Login from './compoments/Auth/Login';
import Register from './compoments/Auth/Register';

function App({ fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Router>
      <section className='section'>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/public' component={Public} />
            <Route path='/private' component={Private} />

            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
      </section>
    </Router>
  );
}

export default connect(null, { fetchUser })(App);
