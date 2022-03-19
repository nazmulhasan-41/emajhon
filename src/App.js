import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {

  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route exact path="/" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route
        path="product/:productId"
        element={<ProductDetail />}
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      {/* <Shop></Shop> */}

    </div>
  );
}

export default App;
