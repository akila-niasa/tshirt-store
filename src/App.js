import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';


import GrandPa from './components/GrandPa/GrandPa';

function App() {
  return (
    <div>
      <Header></Header>
      <div  className="container-fluid">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/orderreview' element={<OrderReview/>}/>
        <Route path='/grandpa' element={<GrandPa/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
