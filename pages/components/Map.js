import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY3ZjdmYiLCJhIjoiY2tzMmY3cnl0MGQxaDJvbXRzdnpjNXpvZyJ9.dUm46iQJtmtptcs5flX97A";
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`flex-1`;
