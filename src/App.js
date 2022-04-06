import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/login/Login';

import { createContext, useState } from 'react';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Shipment from './components/shipment/Shipment';


export const Context = createContext('Default Value');

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  
  return (
    <div >
      Email : {loggedInUser.email}

    <Context.Provider value={[loggedInUser,setLoggedInUser]}>

      <Header></Header>

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route exact path="/" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route
        path="product/:productId"
        element={<ProductDetail />}
        />
        <Route path="/login" element={<Login/>} />

        <Route path="/test" element={<PrivateRoute Component={Shipment} />} />

   
        <Route path="*" element={<NotFound/>} />
      </Routes>

      </Context.Provider>   
    </div>
  );
}

export default App;
