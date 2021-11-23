import Image from "./Image";
import { useState } from "react";
import axios from "axios";

const MainPage = ({ query, images, setImages, config }) => {
  const [page, setPage] = useState(1);
  
  let imageList;
  const nextPage = async () => {
    if(query == ""){
    const res = await axios.get(
      `https://api.unsplash.com/photos?page=${page + 1}&per_page=30`,
      config
    );
    setPage(page + 1);
    setImages(res.data);
    } else {
      console.log(query)
    const res = await axios.get(
      `https://api.unsplash.com/photos?query=${query}&page=${page + 1}&per_page=30`,
      config
    );
    setPage(page + 1);
    setImages(res.data);
    }
  };
  const prevPage = async () => {
    if (page < 2) return;
    if(query == ""){
    const res = await axios.get(
      `https://api.unsplash.com/photos?page=${page - 1}&per_page=30`,
      config
    );
    setPage(page - 1);
    setImages(res.data);
    } else {
      const res = await axios.get(
        `https://api.unsplash.com/photos?query=${query}&page=${page - 1}&per_page=30`,
        config
      );
      setPage(page - 1);
      setImages(res.data);
    }
  };
  if (images.length < 1) {
    imageList = <div className="text-center mt-5 fs-1">Loading</div>;
  } else {
    imageList = (
      <>
        <div className="container d-flex flex-wrap justify-content-center">
          {images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </div>

        <div className="d-flex mx-auto flex-row justify-align-center fs-7 mb-3 mt-3">
          <button className="btn btn-secondary col text-center" onClick={prevPage}>Prev</button>
          <button className="btn btn-secondary ms-2 me-2 col text-center"disabled>{page}/10</button>
          <button className="btn btn-secondary col text-center" onClick={nextPage}>Next</button>

        </div>
      </>
    );
  }
  return  imageList;
};

export default MainPage;
