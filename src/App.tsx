import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import logo from './assets/static/images/logo.png';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
function App() {
  const store = useSelector((store: []) => store);
  console.log(store);

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
            <div>
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
            <div>
              <div style={{ display: 'flex' }}>
                <Link to={'/'} className="nav-link">
                  <span style={{ fontSize: '12px' }}>SignIn</span>
                </Link>
                <Link to={'/register'} className="nav-link">
                  <span style={{ fontSize: '12px' }}>Register</span>
                </Link>
              </div>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => console.log(store)}
              >
                <i className="fas fa-shopping-cart"></i> {store.length} Items
              </button>
            </div>
          </div>
        </nav>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  My Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {store.length ? (
                  <div style={{ display: 'flex' }}>
                    <img
                      src="https://static.onecms.io/wp-content/uploads/sites/9/2021/06/22/different-types-of-tea-FT-BLOG0621.jpg"
                      width="90px"
                      height="90px"
                      alt=""
                    />
                    <div>
                      <h2>title</h2>
                      <span
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <button>-</button>1<button>+</button>x Rs187
                        <div>Rs 187</div>
                      </span>
                    </div>
                  </div>
                ) : (
                  <h2>No items</h2>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <span>Proceed to Checkout</span>
                  <span>Rs 100</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
      <div className="footer">
        Copyright 2011-2022 Sabka Bazaar Grocery Supplies Pvt Ltd.
      </div>
    </>
  );
}

export default App;
