import React from "react";
import { useState, createContext, useContext, useEffect } from "react";
import { getHouse } from "../api/house";
import { LoadingContext } from "./LoadingProvider";
export const HouseContext = createContext();
const HouseProvider = (props) => {
  const loadingProvider = useContext(LoadingContext);
  const [houseList, setHouseList] = useState([]);

  useEffect(() => {
    loadingProvider.setStatusLoading(true);
    getHouse()
      .then((data) => {
        setHouseList(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loadingProvider.setStatusLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HouseContext.Provider
      value={{
        houseList: houseList,
        setHouseList: setHouseList,
      }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};
export default HouseProvider;
