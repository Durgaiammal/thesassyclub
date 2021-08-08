import './App.css';
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import ProductDetailScreen from './Screens/ProductDetailScreen';
import CartScreen from './Screens/CartScreen';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Switch>
              <Route path="/product:id" component={ProductDetailScreen} />
              <Route path="/cart" component={CartScreen} />
              <Route path="/" component={HomeScreen} exact />
            
            </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
