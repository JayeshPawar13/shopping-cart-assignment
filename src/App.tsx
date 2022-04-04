import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { addToCart, removeFromCart } from './actions/actioncreators';
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
              <div className="modal-body">{CartRender()}</div>
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

function CartRender() {
  const dispatch = useDispatch();
  const store = useSelector((store: any[]) => store);
  const cartItems = Array.from(new Set(store)).map((item: any, index) => {
    return (
      <>
        <div
          style={{
            display: 'flex',
          }}
          key={index}
          className="my-2"
        >
          <img
            src={require(`../src/assets/static/images/products/${item.imageURL}`)}
            width="90px"
            height="90px"
            alt=""
          />
          <div>
            <h6 className="mx-3">{item.name}</h6>
            <div
              style={{
                display: 'flex',
              }}
            >
              <i
                className="fa-solid fa-circle-minus mx-3 my-1"
                onClick={() => dispatch(removeFromCart(item))}
              ></i>
              {store.filter((unique: any) => unique.id === item.id).length}
              <i
                className="fa-solid fa-circle-plus mx-3 my-1"
                onClick={() => dispatch(addToCart(item))}
              ></i>
              <span className="mx-3">x</span>
              <span className="mx-3">Rs.{item.price}</span>
            </div>
          </div>
          <div className="my-4 mx-5">
            Rs.
            {item.price *
              store.filter((unique: any) => unique.id === item.id).length}
          </div>
        </div>
      </>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      {cartItems.length ? cartItems : <h3>No items</h3>}
    </div>
  );
}

export default App;
