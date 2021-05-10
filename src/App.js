import logo from './logo.svg';
import './App.css';
import Products from './productswithusestate/products';
import ProductsList from './productwithusereducer/product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <Products/>
        <ProductsList/>
      </header>
    </div>
  );
}

export default App;
