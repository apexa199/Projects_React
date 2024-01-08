
import './App.css';
import { Header } from './container/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductComponent } from './container/ProductComponent';
import { ProductDetail } from './container/ProductDetail';
import { ProductList } from './container/ProductList';

function App() {


  return (
    <div className="App">
    <Router>

    <Header/>
    
      <Routes>
    
      <Route path='/' exact Component={ProductComponent}/>
      <Route path='/product/:productId' exact Component={ProductDetail}/>
      <Route path='/' exact Component={ProductList}/>
      <Route>404 Not Found!</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
