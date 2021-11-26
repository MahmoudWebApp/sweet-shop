import React, { useEffect, useState } from "react";
import naplsia from "../../img/naplsia.jpg";
// import paklawa from "../../img/paklawa.jpg";
import classes from "./AvailableSweets.module.css";
import SweetsItem from "./SweetsItem/SweetsItem";
import Card from "../UI/Card";

const AvailableSweets = () => {
  const [sweetSData, setSweetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://sweets-shop-dbb2d-default-rtdb.firebaseio.com/sweets.json"
      );
      if (!response.ok) {
        throw new Error('Some Thing is wrong!');
      };
      const responseData = await response.json();
      let dataLoaded = [];
      for (const key in responseData) {
        dataLoaded.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setSweetData(dataLoaded);
      setIsLoading(false);
    };
   
      fetchData().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message);
        console.log(error);
      });
 
  }, []);

  if (isLoading) {
    return (
      <section className={classes.sweetLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.sweetError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const sweets = sweetSData.map((sweet) => (
    <li>
      <SweetsItem
        key={sweet.id}
        id={sweet.id}
        name={sweet.name}
        img={naplsia}
        description={sweet.description}
        price={sweet.price}
      />
    </li>
  ));
  return (
    <section className={classes.sweets}>
      <Card>
        <ul>{sweets}</ul>
      </Card>
    </section>
  );
};

export default AvailableSweets;
