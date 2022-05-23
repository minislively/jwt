import React, {useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './component/loginForm/PrivateRoute';
import Home from './pages/Home'
import Hello from './pages/Hello'
import Login from './pages/Login'
import {auth} from './component/loginForm/Auth'
import './App.css';


const initialState = {
  authenticated: false,
  token: null
}

function reducer(state, action) {
  switch(action.type) {
      case 'SET_TOKEN':
          return {...state, token: action.token, authenticated: action.result};
      default:
          return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authenticated } = state;

  function handleLogin(id, password) {
    let token = auth.Islogin(id, password);

    if (token) {
      console.log('로그인 성공!');
      dispatch({
        type: 'SET_TOKEN',
        token: token,
        result: true,
      });
    } else {
      console.log('로그인 실패');
      dispatch({
        type: 'SET_TOKEN',
        token: null,
        result: false,
      });
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          authenticated={authenticated}
          component={(props) => <Login {...props} handleLogin={handleLogin} />}
        />
        <PrivateRoute
          path="/hello"
          authenticated={authenticated}
          component={(props) => (
            <Hello {...props} />
          )}
        />
      </Switch>
    </Router>
  );
}



export default App;