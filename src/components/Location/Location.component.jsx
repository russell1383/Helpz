import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { MdSidebarItems } from "../Navbar/Navbar.style";

const Location = () => {
  const [address, setAddress] = useState({
    latitude: null,
    longitude: null,
    useAddress: null,
  });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position) => {
    const userLocation = { ...address };
    userLocation.latitude = position.coords.latitude;
    userLocation.longitude = position.coords.longitude;
    setAddress(userLocation);
  };
  getLocation();


  return (
    <MdSidebarItems>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <small>Dhanmondi, Dhaka</small>
    </MdSidebarItems>
  );
};

export default Location;
