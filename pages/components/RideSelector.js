import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setrideDuration] = useState(0);
  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiY3ZjdmYiLCJhIjoiY2tzMmY3cnl0MGQxaDJvbXRzdnpjNXpvZyJ9.dUm46iQJtmtptcs5flX97A`
    )
      .then((res) => res.json())
      .then((data) => {
        setrideDuration(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 minutes away</Time>
            </CarDetails>
            <Price>${(rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`flex flex-col flex-1 overflow-y-scroll`;
const Title = tw.div`text-gray-500 text-center text-sm py-2 border-b`;
const CarList = tw.div`overflow-y-scroll`;
const Car = tw.div`flex p-4 items-center`;
const CarImage = tw.img`h-14 mr-2`;
const CarDetails = tw.div`flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-sm text-blue-500`;
const Price = tw.div`text-sm`;
