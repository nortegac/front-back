import React, { useState, useEffect } from "react";
import Job from "./Job";

const JobsList = () => {
  const [state, setState] = useState({offers:[]});

  useEffect(() => {
    const url = "/offers";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((offers) => {
        setState({ offers });
      });
  }, []);


  const render = () => {
    return (
      <div>
        {state.offers.map((e, i) => (
          <Job key={i} offer={e} />
        ))}
      </div>
    );
  };

  return <div>{render()}</div>;
};

export default JobsList;
