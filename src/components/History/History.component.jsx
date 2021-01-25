import React from "react";
import { HistoryContainer, HistoryContentConatiner, PurchaseDate } from "./History.style";
import img from "../../assets/images/qr.png";

const History = ({ openHistory }) => {
  return (
    <>
      <HistoryContainer openHistory={openHistory}>
        <HistoryContentConatiner>
          <img src={img} alt="" />
          <div className="right_side">
            <p>
              Invoice No : 000102510 <br /> Shopping of: <br /> Onion, Potato & Total Cost
              was <span>60TK</span> 
            </p>
            <span>To see to invoice scan the QR code</span>
                  </div>
                  <PurchaseDate>Date: 12-12-21</PurchaseDate>
        </HistoryContentConatiner>
      </HistoryContainer>
    </>
  );
};

export default History;
