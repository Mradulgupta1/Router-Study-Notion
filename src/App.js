                            // ॥ श्री गणेशाय नमः ॥ 

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/PrivateRoute";



function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-x-hidden">
    	<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

		<Routes>

			<Route path="/" element={<Home/>}/>
			<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
			<Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
			<Route path="/Dashboard" element={
				<PrivateRoute isLoggedIn={isLoggedIn}>
					<Dashboard/>
				</PrivateRoute>
			}/>

		</Routes>
    </div>
  );
}

export default App;
