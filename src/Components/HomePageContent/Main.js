/* eslint-disable react/jsx-pascal-case */
import React, {useState, useReducer} from "react";
import "./Main.css";
import Mession_1 from "./Mession_1";


  // useReducer :
const initialState = {isShowing_1: true,
  isShowing_2: false,
  isShowing_3: false,
  isShowing_4: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'tab_1':
      return {isShowing_1: true,isShowing_2: false, isShowing_3: false, isShowing_4: false};
    case 'tab_2':
      return {isShowing_1: false,isShowing_2: true, isShowing_3: false, isShowing_4: false};
    case 'tab_3':
      return { isShowing_1: false,isShowing_2: false, isShowing_3: true, isShowing_4: false};
    case 'tab_4':
      return {isShowing_1: false,isShowing_2: false, isShowing_3: false, isShowing_4: true};
    default:
      throw new Error();
  }
}

function Main (){

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Main">
    <div className="carousel">
      <div className="container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner w-100 p-3 d-inline-block">
            <div className="carousel-item active " data-bs-interval="9000">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeaf1MkQ_U7APMh_wzbEG0sF35AC46wjtXw&usqp=CAU"
                className="d-block "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="9000">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyNcekbg8ewL6dNIvJxURHPmEmF7oOyKSaw&usqp=CAU"
                className="d-block"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="9000">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ztOO7Dh-AHBx1w4lBwXrby1SATugxaUUCg&usqp=CAU"
                className="d-block"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <div className="title pt-2">
      <div className="container">
        <div className="ftitle mt-5 mb-5 position-relative">
          <h2 className="fw-bold">Services</h2>
        </div>
      </div>
    </div>

    <div className="Services- position-relative">
      <div className="container">
        <ul className="nav nav-tabs justify-content-center ">
          <li className="nav-item me-5">
            <button className={state.isShowing_1 ? "btn btn-primary btn-lg" :"btn btn-secondary btn-lg "} aria-current="page" 
            type="button" onClick={() => dispatch({ type: 'tab_1' })}>
              Car plates scanner
            </button>
          </li>
          <li className="nav-item me-5">
            <button className={state.isShowing_2 ? "btn btn-primary btn-lg" :"btn btn-secondary btn-lg "}
            type="button" onClick={() => dispatch({ type: 'tab_2' })}>
              Mession2
            </button>
          </li>
          <li className="nav-item me-5">
            <button className={state.isShowing_3 ? "btn btn-primary btn-lg" :"btn btn-secondary btn-lg "}
            type="button" onClick={() => dispatch({type: 'tab_3'})} >
            Mession3
            </button>
          </li>
          <li className="nav-item me-5">
            <button
              className={state.isShowing_4 ? "btn btn-primary btn-lg" :"btn btn-secondary btn-lg "}
              tabindex="-1"
              aria-disabled="true"
              type="button" onClick={() => dispatch({ type: 'tab_4' })}
            >
              Mession4
            </button>
          </li>
        </ul>
      </div>
    </div>

    <Mession_1 isShowing={state.isShowing_1}/>
    {/* <Mession_2 isShowing={state.isShowing_2}/>
    <Mession_3 isShowing={state.isShowing_3}/>
    <Mession_4 isShowing={state.isShowing_4}/> */}


    {state.isShowing_2 && 
      <p>Mession 2</p>
      }
    {state.isShowing_3 && 
      <p>Mession 3</p>
      }
    {state.isShowing_4 && 
      <p>Mession 4</p>
      }

  </div>
  )
}


export default Main;
