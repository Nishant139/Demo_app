import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={Register}></Route>
      <Route path='/product-list' Component={ProductList}></Route>
      <Route path='/' Component={Login}></Route>
      
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;