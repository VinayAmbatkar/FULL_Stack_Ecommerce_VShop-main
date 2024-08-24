
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
<BrowserRouter>
<Header />
<Routes>
  <Route path="/" exact={true} element={<Dashboard />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>

</BrowserRouter> 
  );
}

export default App;
