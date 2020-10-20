import React from 'react';
//mport './App.css';
import Routes from "../src/routes"
import "./Styles/global.css"
import history from "../src/Services/history"
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  return (
    <>  
      <Router history={history}>
        <Navbar/>
          <Routes/>
      </Router>
    </>
  )
}