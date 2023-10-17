import React from "react";
import SidebarNav from "./Components/SidebarNav/SidebarNav";
import Customers from './Components/Pages/Customers';
import Product from './Components/Pages/Product';
import Help from './Components/Pages/Help';
import Income from './Components/Pages/Income';
import Promote from './Components/Pages/Promote';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";

function App() {
  return (
    <Fragment>      
      <BrowserRouter>
        <div className="renderHTML">
          <SidebarNav/>
          <main>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/product" element={<Product/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/income" element={<Income/>} />
              <Route path="/promote" element={<Promote/>} />
              <Route path="/help" element={<Help/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
