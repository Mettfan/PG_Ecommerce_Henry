import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import  store  from './redux/store/store'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider domain='booma.us.auth0.com' clientId='mXjW5ldDV5ubNLEkI7elWLZzWbjJMeCi' redirectUri={window.location.origin} > */}
    <Auth0Provider domain='leonardomontilla74.us.auth0.com' clientId='s0zsNgFrPiZ32OSzGtOK7SRf2YX1a1Xf' redirectUri={'http://localhost:3000/user/profile'} >
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>

    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
      

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
