import React from "react";
import {
  HistoryContainer,
  HistoryContentConatiner,
  PurchaseDate,
  QrCodeContainer,
} from "./History.style";
import img from "../../assets/images/qr.png";
import QRCode from "qrcode.react";

const History = ({ history, orderHistory }) => {
  const [openHistory, setOpenHistory] = history;
  console.log();
  return (
    <>
      <HistoryContainer openHistory={openHistory}>
        <h1 onClick={() => setOpenHistory(false)}>✖</h1>
        {orderHistory.length ? (
          orderHistory.map((history) => (
            <HistoryContentConatiner key={history.id}>
              <QrCodeContainer>
                <QRCode
                  value={`Order No: ${
                    history.order_number
                  }\nOrdered Products: ${history.order_product.map(
                    (order) => `${order.product_name.split(" ")[0]} `
                  )} \nTotal Price:${history.pay_amount} TK`}
                  size={100}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={false}
                  renderAs={"svg"}
                  className="qr"
                />
              </QrCodeContainer>

              <div className="right_side">
                <p>
                  Invoice No : {history.order_number} <br /> Shopping of: <br />
                  {history.order_product.map(
                    (order) => `${order.product_name.split(" ")[0]}, `
                  )}
                  & Total Cost was <br /> <span>{history.pay_amount}৳</span>
                </p>
                <span>To see to invoice scan the QR code</span>
              </div>
              <PurchaseDate>
                Date: {history.created_at.split(" ")[0]}
              </PurchaseDate>
            </HistoryContentConatiner>
          ))
        ) : (
          <small>Sorry, no purchase history found.</small>
        )}
      </HistoryContainer>
    </>
  );
};

export default History;
