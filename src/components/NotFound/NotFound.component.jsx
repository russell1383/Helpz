import React from "react";
import { NotFoundContainer, NotFoundContainerWrap } from "./NotFound.style";
import img1 from "../../assets/images/connection-lost.png";
import img404 from "../../assets/images/404.png";
import { useHistory } from "react-router-dom";


const NotFoundContent = () => {

    const history = useHistory();

  return (
    <>
      <NotFoundContainerWrap>
        <NotFoundContainer>
          <div className="left-side">
            <img src={img1} alt="" />
          </div>
          <div className="right-side">
            <img src={img404} alt="" />
            <p>We Are sorry, the page you requested Couldn’t be found</p>
            <button onClick={() => history.push("/")}>Go Back to Home</button>
          </div>
        </NotFoundContainer>
      </NotFoundContainerWrap>
    </>
  );
};

export default NotFoundContent;
