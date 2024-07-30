import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import{BrowserRouter, Route,Router,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Listing from './Pages/Listing';




function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home />} />

{/* what is the difference between BrowserRouter and Router in react-router-dom? */}
 {/* what exact and id used for */}
<Route path="/cat/:id" exact={true} element={<Listing />} />
</Routes>
<Footer />
</BrowserRouter>


</>
 

  );
}

export default App;
