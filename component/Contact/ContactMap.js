import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const ContactMap = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
    margin: "0 0 0 0",
  };
  const defaultCenter = {
    lat: 33.6844,
    lng: 73.0479,
  };
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default ContactMap;
