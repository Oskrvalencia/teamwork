import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [imgData, setImgData] = useState([]);

  useEffect((page = 1) => {
    getNewData(page);
  }, []);

  const getNewData = (page) => {
    setImgData([]);
    const fetchImgData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${Number(page)}`
        );
        setImgData(response.data.results);
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchImgData();
  };

  return (
    <>
      <div className="container">
        {imgData.length > 0 ? (
          <div>
            <h2>Rick & Morty</h2>
            {imgData.map((a, index) => (
              <img
                data-toggle="modal"
                data-target="#exampleModalLong"
                src={a.image}
                className="img-thumbnail img"
                alt="..."
                key={index}
              />
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <nav aria-label="Page navigation example pagination">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={() => getNewData(1)}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => getNewData(2)}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => getNewData(3)}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => getNewData(4)}>
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => getNewData(5)}>
              5
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
