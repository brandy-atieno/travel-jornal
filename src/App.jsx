import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <Nav/>
      <p>Welcome To My Adventure Spots </p>
   {data? data.map(product=>(<Card product={product} key={product.title}/>)): "Loading..."}
    </div>
  );
}

export default App;
