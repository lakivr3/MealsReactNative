import camelize from "camelize";
import { location } from "./mock";

export const locationRequest = (searchTerm) => {
  return new Promise((res, rej) => {
    const locationMock = location[searchTerm];
    if (!locationMock) {
      rej("not found");
    }
    res(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
