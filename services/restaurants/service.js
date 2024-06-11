import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantReq = async (location = "37.7749295,-122.4194155") => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) rej(mock);
    else res(mock);
  });
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

restaurantReq()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error");
  });
