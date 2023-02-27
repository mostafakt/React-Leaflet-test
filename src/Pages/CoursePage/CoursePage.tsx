import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  FeatureGroup,
  Popup,
} from "react-leaflet";
import * as ReactDOM from "react-dom/client";
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw";
import { TextField } from "@material-ui/core";
const MarcetName = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};
const CoursePage = () => {
  const [editableFG, setEditableFG] = useState();
  const [name] = useState("mark name");
  const [imgUrl, setImgUrl] = useState("");
  const icon = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/images/Vector.svg",
  });
  useEffect(() => {}, [name]);

  let onCreated = (e: any) => {
    console.log(e);
    console.log(e.layerType);
    // if (e.layerType === "marker")
    {
      console.log(name);
      e.layer.bindPopup(name);
    }
    //@ts-ignore
    const drawnItems = editableFG.leafletElement._layers;
    console.log(drawnItems);
    if (Object.keys(drawnItems).length > 1) {
      Object.keys(drawnItems).forEach((layerid, index) => {
        if (index > 0) return;
        let layer = drawnItems[layerid];
        //@ts-ignore
        editableFG.leafletElement.removeLayer(layer);
      });

      console.log(drawnItems);
    }
  };

  const onFeatureGroupReady = (reactFGref: any) => {
    setEditableFG(reactFGref);
  };
  const renderPopupForm = (geoJsonString: string) => {
    const popup = L.popup();
    const container = L.DomUtil.create("div");
    popup.setContent(container);
    const root = ReactDOM.createRoot(container);
    root.render(<>{geoJsonString}</>);
    return popup;
  };
  return (
    <Box
      sx={{
        height: "100vw",
        width: "100vw",
        pt: "10px",
        backgroundColor: "gray",
      }}
    >
      <Box
        sx={{
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: "gold",
          width: "700px",
          gap: "50px",
          ml: "220px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* {" "}
        <TextField
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />{" "} */}
          <TextField
            placeholder="new map image Link"
            type="text"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
              console.log(name);
            }}
          />
        </Box>
        <div>
          <MapContainer
            maxBoundsViscosity={1}
            center={[50, 50]}
            zoom={3}
            scrollWheelZoom={false}
          >
            <TileLayer
              maxNativeZoom={2}
              noWrap={true}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={
                imgUrl === ""
                  ? process.env.PUBLIC_URL + "/assets/images/sss.png"
                  : imgUrl
              }
            />
            <FeatureGroup
              ref={(featureGroupRef) => {
                onFeatureGroupReady(featureGroupRef);
              }}
            >
              {/* <Popup>
              <MarcetName />
            </Popup> */}
              <EditControl
                draw={{
                  polyline: false,
                  marker: { icon },
                  circle: false,
                  polygon: true,
                  rectangle: false,
                }}
                position="topleft"
                onCreated={onCreated}
              />
            </FeatureGroup>
          </MapContainer>
        </div>
      </Box>
    </Box>
  );
};

export default CoursePage;
