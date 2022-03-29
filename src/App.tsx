import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import logo from './assets/static/images/logo.png';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="nav-link">
            <img className="navbar-brand" src={logo} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/home'} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/home'} className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Products />} />
          {/* <Route path="/new-course" element={<NewCourse />} />
          <Route path="/post-details/:id" element={<PostDetails />} /> */}
          <Route
            path="*"
            element={
              <>
                <h1>Resource Not Found</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
