import { useState, useEffect, useReducer } from "react";
// r - query 

const Image = ({ image }) => {
  const [show, setShow] = useState(false);
    function handleClickAdd(e) {
      e.preventDefault();
      
      localStorage.setItem(JSON.stringify(image.id), JSON.stringify(image))
    }
    function handleClickRemove(e) {
      e.preventDefault();
      
      localStorage.removeItem(JSON.stringify(image.id))
      window.location.reload()
    }

  return (
    <>
      <div
        type="button"
        className="card"
        data-bs-toggle="modal"
        data-bs-target={`#r${image.id}`}
        
      >
        <img
          src={image.urls.raw + "&h=300"}
          className="card-img"
          alt={image.alt_discription}
        />
        <div
          className="card-img-overlay d-flex flex-column justify-content-end p-0"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {show ? (
            <div className="card-text d-flex justify-content-between align-items-center overflow-auto">
              <span>{image.user.username}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id={`r${image.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">
                {image.user.name}
              </h4>
              <div className="mx-auto ms-4 mt-2">
                  <em>{image.user.bio}</em>
                </div>
            </div>
            <div className="d-flex justify-content-center">
              <a type="button" href={image.links.download + "?force=true"} target="_blank">
                <img className="w-100"
                  src={image.urls.raw + "&h=650"}
                  alt={image.alt_discription}
                ></img>
              </a>
            </div>
            <div className="modal-footer container d-flex justify-content-start">
              <div className="d-flex w-100 flex-column fs-7">
                <div className="d-flex flex-row justify-content-between mb-4 mt-2">
                   <a
                    className="btn btn-outline-light mx-1 fs-6 mt-auto"
                    href={image.urls.raw}
                    target="_blank"
                  >
                  Show photo in a new tab
                  </a>
                    <a
                    className="btn btn-outline-light mx-1  fs-6 mt-auto"
                    href="#" onClick={handleClickAdd}
                  >
                  Add photo to your folder
                  </a>
                  <a
                    className="btn btn-outline-light mx-1  fs-6 mt-auto"
                    href="#" onClick={handleClickRemove}
                  >
                  Remove photo from your folder
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                      <a
                      className="btn btn-outline-light mx-1 fs-6 mt-auto"
                      href={image.user.portfolio_url}
                      target="_blank"
                      >
                      Open portfolio
                      </a>
                    <button
                      type="button"
                      className="justify-content-end  btn btn-light mx-1"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
