import './App.css';
import Thanku from './component/Submit/Thanku';
import Question from './component/Quesions/Question';
import { FormDataProvider } from './Context/Dataprovider';
import { Auth0Provider } from '@auth0/auth0-react';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <Auth0Provider
    domain="dev-ha06capsrl46xqqk.us.auth0.com"
    clientId="2VN0Ypcwn6NE5Y4d5h5LnS1bin9CQqTT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <FormDataProvider>
       
        <Routes>
              <Route path="/" element={<Question/>}/>
              <Route path="/submit" element={<Thanku />}/>
        </Routes>
        
    </FormDataProvider>
  </Auth0Provider>
   </>
  );
}

export default App;
