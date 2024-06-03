                            // ॥ श्री गणेशाय नमः ॥ 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import {Toaster} from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
	  <Toaster/>
  </BrowserRouter>
);

