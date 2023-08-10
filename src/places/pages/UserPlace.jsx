import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous ",
    imageUrl: "https://eastgatemall.co.za/wp-content/uploads/piazza.png",
    address: "43 Bradford Rd, Bedfordview, Germiston, 2008",
    location: {
      lat: -26.180388,
      lag: 28.1150201,
    },
    creator: 'u1'
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous ",
    imageUrl: "https://eastgatemall.co.za/wp-content/uploads/piazza.png",
    address: "43 Bradford Rd, Bedfordview, Germiston, 2008",
    location: {
      lat: -26.180388,
      lag: 28.1150201,
    },
    creator: 'u2'
  },
];

const UserPlace = () => {
 const userId = useParams().userId;
 const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlace;
