import React, { useContext, useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import {
    BackButton,
  InvoiceContainer,
  InvoiceInfoWrap,
  PrintButtonWrap,
} from "./InvoiceContent.style";

const InvoiceContent = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
    const [addToCart, setAddToCart] = value2;
    const history = useHistory();
    let date = new Date();
    console.log(addToCart)

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <>
      <InvoiceContainer ref={componentRef}>
        <h2>My Order Details</h2>
        <hr />
        <h3>#EHY12314 [completed]</h3>
        <PrintButtonWrap>
          <small>Ordered Date: {date.toDateString()}</small>
          <button onClick={handlePrint}>print order</button>
        </PrintButtonWrap>

        <InvoiceInfoWrap>
          <h3>Billing Address</h3>
                  <p>Name: {loggedInUser.name}</p>
          <p>Email: {loggedInUser.email}</p>
          <p>Phone: {loggedInUser.phone}</p>
          <p>Address: Dhaka</p>
        </InvoiceInfoWrap>
        <InvoiceInfoWrap>
          <h3>Payment Information</h3>
          <p>Paid Amount: {addToCart.reduce((a, b) => a + b.totalPrice, 0)}</p>
          <p>Payment Method: </p>
          <p>Transaction ID: </p>
          <p>Edit Transaction:</p>
        </InvoiceInfoWrap>
        <table>
          <tr>
            <th>ID#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {addToCart.map((item,idx) => (
            <tr key={idx}>
                  <td>{idx+1}</td>
                  <td>{item.name}</td>
                  <td>{item.totalQuantity}</td>
                  <td>{item.totalPrice}</td>
            </tr>
          ))}
              </table>
              
              <BackButton onClick={()=>history.push("/")}>Back to home</BackButton>
      </InvoiceContainer>
    </>
  );
};

export default InvoiceContent;
