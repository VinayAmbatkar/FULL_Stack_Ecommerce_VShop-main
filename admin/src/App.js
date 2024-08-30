
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Components/Sidebar';

function App() {
  return (
<BrowserRouter>
<Header />
<div className="main d-flex">
  <div className="sidebarWrapper">
    <Sidebar />
  </div>
</div>
<Routes>
  <Route path="/" exact={true} element={<Dashboard />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>

</BrowserRouter> 
  );
}

export default App;
