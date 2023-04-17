import React from 'react'
import { BrowserRouter }  from "react-router-dom"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from './components/App'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <BrowserRouter >
      <App />
 </BrowserRouter >
)
;

