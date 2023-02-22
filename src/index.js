import React from 'react';
import { Router } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

