
import ProductCard from "./components/ProductCard";
import './App.css'
function App(){
  return (
    <div>
      <h1>My Shop</h1>

      <ProductCard name="Phone" price={60000} image="phone.jpg" />
      <ProductCard name="Laptop" price={100000} image="laptop.jpg" />
      <ProductCard name="Headphones" price={3000} image="headphone.jpg" />
    </div>
  );
}
export default App