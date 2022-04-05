import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firstSlide from '../../assets/static/images/offers/offer1.jpg';
import secondSlide from '../../assets/static/images/offers/offer2.jpg';
import thirdSlide from '../../assets/static/images/offers/offer3.jpg';
import styles from './Home.module.scss';

interface Categories {
  description: string;
  enabled: true;
  id: string;
  imageUrl: string;
  key: string;
  name: string;
  order: number;
}

function Home() {
  const [categoriesData, setCategoriesData] = useState<Categories[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3003/categories`).then((response) => {
      console.log(response.data);
      setCategoriesData(response.data);
    });
  }, []);
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstSlide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={secondSlide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={thirdSlide} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        {categoriesData.length ? (
          categoriesData
            .filter((enabledCategory) => enabledCategory.enabled)
            .sort((sortedCategory) => sortedCategory.order)
            .map((category, index) => {
              console.log(category);

              return (
                <div
                  key={category.id}
                  className={`${styles.category} shadow-sm p-3 mb-5 bg-white rounded`}
                >
                  <img
                    src={require(`../../assets/static/images/category/${category.imageUrl}`)}
                    width="300px"
                    alt=""
                  />
                  <div
                    style={{
                      flexBasis: '600px',
                      textAlign: 'center',
                    }}
                  >
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <button
                      className="btn"
                      onClick={() => navigate(`/product/${category.id}`)}
                    >
                      Explore {category.name}
                    </button>
                  </div>
                </div>
              );
            })
        ) : (
          <h2>Loading..</h2>
        )}
      </div>
    </>
  );
}
export default Home;
